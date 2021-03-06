import React from "react";
import {fromRenderProps, compose} from 'recompose'
import {AppContext} from "../../context/AppContext";
import Banner from "../partials/banner";
import Layout from "../layout";

class pageAddResto extends React.Component {
    state = {
        name: '',
        likes: '',
        dislikes: '',
        notes: '',
        photo: '',
        created: false,
        status: '', 
        yelpStatusMessage: ''
    }

    createRestoQuery = () => (
       `mutation {
            createRestaurant(restoName: "${this.state.name}", mainImage: "${this.state.photos}") {
              id
            }
        }`
    );

    searchYelp = async(term, lat, long) => {
        fetch(`/api/yelp-search?term=${term}&lat=${lat}&long=${long}`)
            .then(res => res.json())
            .then(data => {
                const businesses = data.businesses;
                document.getElementById('spinner').classList.add('hidden');
                if (businesses.length) {
                    this.getYelpBusiness(businesses[0].id)
                } else {
                    this.setState({yelpStatusMessage: 'No businesses found.'})
                };
            })
            .catch(e => {
                throw e;
            });
    };

    getYelpBusiness = async id => {
        fetch(`/api/yelp-business?id=${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(e => {
                throw e;
            });
    };
    
    handleSubmit = async e => {
        e.preventDefault();
        try {
            const query = this.createRestoQuery();
            await fetch('/graphql', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({query})
            });
            this.setState({ created: true });
        } catch(e) {
            this.setState({ created: false });
            throw(e)
        }
    }

    handleFormChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleNameChange = e => {
        e.preventDefault();
        this.setState({ name: e.target.value, yelpStatusMessage: ''}, () => {
            const searchTerm = this.state.name;
            const dropdownMessage = document.getElementsByClassName('message')[0];

            if (searchTerm.length >= 3) {
                dropdownMessage.classList.add('hidden');
                document.getElementById('spinner').classList.remove('hidden');
                setTimeout(() => {
                    // show loader spinner here
                    this.searchYelp(searchTerm, this.props.location.latitude, this.props.location.longitude)
                }, 1000)
            } else {
                dropdownMessage.classList.remove('hidden');
                document.getElementById('spinner').classList.add('hidden');
            }
        })
    }

    render() {
        const statusMessage = this.state.created ?
        ((this.state.created ?
            //include link to profile
            <p>Success! {this.state.name} was added.</p> :
            <p>Sorry, something went wrong.</p>
        )) : null;

        return (
            <Layout page="add_new">
                <Banner title="Add New" image="/images/header-4.jpg" />
                <div className="container">
                    { statusMessage }
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">
                            Restaurant Name
                            <input type="text" id="name" name="name" onChange={this.handleNameChange}/>
                            <div className="dropdown">
                                <p className="message">Type at least 3 characters...</p>
                                <p className="yelp-message">{this.state.yelpStatusMessage}</p>
                                <i className="fa fa-spinner fa-spin hidden" id="spinner"/>
                            </div>
                        </label>
                        <br />
                        <label htmlFor="likes">
                            Likes
                            <br />
                            <small className="form-help-text">
                                Add new lines for each point
                            </small>
                            <br />
                            <textarea id="likes" />
                        </label>
                        <br />
                        <label htmlFor="dislikes">
                            Dislikes
                            <br />
                            <small className="form-help-text">
                                Add new lines for each point
                            </small>
                            <br />
                            <textarea id="dislikes" />
                        </label>
                        <br />
                        <label htmlFor="notes">
                            Notes
                            <textarea id="notes" />
                        </label>
                        <br />
                        <label htmlFor="visits">
                            Visits
                            <input type="number" id="visits" defaultValue="1" />
                        </label>
                        <br />
                        <label htmlFor="photos">
                            Photos
                            <textarea id="photos" name="photos" onChange={this.handleFormChange}/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </Layout>
        )
    }
}

export default compose(fromRenderProps(AppContext.Consumer, (context) => (context)))(pageAddResto)