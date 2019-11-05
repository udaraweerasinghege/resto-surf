import React from "react";
import {fromRenderProps, compose} from 'recompose'
import {AppContext} from "../../context/AppContext";
import Banner from "../partials/banner";
import Layout from "../layout";
import debounce from "../../util/debounce"

class pageAddResto extends React.Component {
    state = {
        name: '',
        likes: '',
        dislikes: '',
        notes: '',
        photos: '',
        created: false,
        status: '', 
        visits: 1,
        yelpStatusMessage: '',
        dropdownOptions: []
    }

    createRestoQuery = () => {
        const { name, photos, likes, dislikes, notes, visits } = this.state;
        return (
            `mutation {
                createRestaurant(restoName: "${name}", mainImage: "${photos}", likes: "${likes}", dislikes: "${dislikes}", notes: "${notes}", visits: ${visits}) {
                id
                }
            }`
        )
    };

    searchYelp = async(term, lat, long) => {
        fetch(`/api/yelp-search?term=${term}&lat=${lat}&long=${long}`)
            .then(res => res.json())
            .then(data => {
                const businesses = data.businesses;
                document.getElementById('spinner').classList.add('hidden');
                if (businesses.length) {
                        this.setState({ dropdownOptions: businesses})
                    // this.getYelpBusiness(businesses[0].id)
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

    debouncedSearch = debounce(() => {
        this.searchYelp(this.state.name, this.props.location.latitude, this.props.location.longitude)
    }, 1000)

    handleNameChange = e => {
        e.preventDefault();
        this.setState({ name: e.target.value, yelpStatusMessage: ''}, () => {
            const searchTerm = this.state.name;
            const dropdownMessage = document.getElementsByClassName('message')[0];

            if (searchTerm.length >= 3) {
                dropdownMessage.classList.add('hidden');
                document.getElementById('spinner').classList.remove('hidden');
                this.debouncedSearch();
            } else {
                dropdownMessage.classList.remove('hidden');
                document.getElementById('spinner').classList.add('hidden');
            }
        })
    }

    render() {
        const { created, name, dropdownOptions, yelpStatusMessage, dislikes, likes, notes } = this.state;
        const statusMessage = created &&
            (this.state.created ?
                //include link to profile
                <p>Success! {name} was added.</p> :
                <p>Sorry, something went wrong.</p>)

        return (
            <Layout page="add_new">
                <Banner title="Add New" image="/images/header-4.jpg" />
                <div className="container">
                    { statusMessage }
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">
                            Restaurant Name<span className="required">*</span>
                            <input type="text" id="name" name="name" onChange={this.handleNameChange}/>
                            <div className="dropdown">
                                <p className="message">Type at least 3 characters...</p>
                                { yelpStatusMessage !== '' && <p className="yelp-message">{yelpStatusMessage}</p> }
                                <i className="fa fa-spinner fa-spin hidden" id="spinner"/>
                                { dropdownOptions.length > 0 && name.length > 0 &&
                                    <ul id="restaurant-options">
                                        {dropdownOptions.map(resto =><li className="restaurant-option" value={resto.id} key={resto.id}>{resto.name}</li>)}
                                    </ul>
                                }
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
                            <textarea id="likes" name="likes" value={likes} onChange={this.handleFormChange}/>
                        </label>
                        <br />
                        <label htmlFor="dislikes">
                            Dislikes
                            <br />
                            <small className="form-help-text">
                                Add new lines for each point
                            </small>
                            <br />
                            <textarea id="dislikes" name="dislikes" value={dislikes} onChange={this.handleFormChange}/>
                        </label>
                        <br />
                        <label htmlFor="notes">
                            Notes
                            <textarea id="notes" name="notes" value={notes} onChange={this.handleFormChange}/>
                        </label>
                        <br />
                        <label htmlFor="visits">
                            Visits
                            <input type="number" name="number" id="visits" defaultValue="1" onChange={this.handleFormChange} />
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