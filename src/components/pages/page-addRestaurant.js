import React from "react";
import Banner from "../partials/banner";
import Layout from "../layout";

export default class pageAddResto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            created: null
        }
    }

    createRestoQuery = () => (
       `mutation {
            createRestaurant(restoName: "${this.state.name}", mainImage: "${this.state.photos}") {
              id
            }
        }`
    )
    
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
    
    render() {
        const statusMessage = this.state.created !== null ? 
        ((this.state.created ?
            //include link to profile
            <p>Success! {this.state.name} was added.</p> : 
            <p>Sorry, something went wrong.</p>
        )) : null;

        return (
            <Layout>
                <Banner title="Add New" image="/images/header-4.jpg" />
                <div className="container">
                    { statusMessage }
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">
                            Restaurant Name
                            <input type="text" id="name" name="name" onChange={this.handleFormChange}/>
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