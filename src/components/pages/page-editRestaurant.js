import React from "react";
import {fromRenderProps, compose} from 'recompose'
import {AppContext} from "../../context/AppContext";
import Banner from "../partials/banner";
import Layout from "../layout";

class pageEditResto extends React.Component {
    state = {
        id: 0,
        name: '',
        likes: '',
        dislikes: '',
        notes: '',
        logo: '',
        visits: 0,
        updated: false,
        error: '',
        newName: '',
        newLikes: '',
        newDislikes: '',
        newNotes: '',
        newLogo: '',
        newVisits: 0,
    }

    componentDidMount = () => {
        this.props.updateField('loading', true)
        this.setState({
            id: Number(this.props.match.params.id)
        }, () => {
            this.getRestaurantData(this.state.id);
        })
    }

    getRestaurantData = async (id) => {
        try {
            const query = `
                {
                    restaurantID(id: ${id}) {
                        slug
                        name
                        notes
                        likes
                        dislikes
                        visits
                        logo
                    }
                }
            `;
            const restoRes = await fetch(`/graphql?query=${query}`);
            const resto = await restoRes.json();
            const restoData = resto.data.restaurantID[0];
            this.setState({
                ...restoData
            }, () => {
                this.setState({
                    newName: this.state.name,
                    newLikes: this.state.likes,
                    newDislikes: this.convertLineBreaks(this.state.dislikes),
                    newNotes: this.state.notes,
                    newLogo: this.state.logo,
                    newVisits: this.state.visits,
                }, () => {
                    this.props.updateField('loading', false)
                })
            });
        } catch (e) {
            throw e;
        }
    };

    addLineBreaks = val => val ? val.replace('\n','<br />') : '';

    convertLineBreaks = val => val ? val.replace('<br />','\n') : '';

    updateRestoQuery = () => {
        const { id, newLikes, newLogo, newName, newNotes, newVisits, newDislikes } = this.state;
        return (
       `mutation {
            updateRestaurant(restoID: ${id}, visits: ${newVisits}, name: "${newName}", likes: "${this.addLineBreaks(newLikes)}", dislikes: "${this.addLineBreaks(newDislikes)}", notes: "${this.addLineBreaks(newNotes)}", logo: "${newLogo}") {
              id
            }
        }`
    )};
    
    handleSubmit = e => {
        e.preventDefault();
        this.setState({ error: '' });
        const query = this.updateRestoQuery();
        fetch('/graphql', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({query})
        }).then( res => res.json())
        .then(data => {
            if(data.data.updateRestaurant.id === this.state.id) {
                this.setState({ updated: true });
            } else {
                this.setState({ updated: false });
            }
        })
        .catch(e => {
            this.setState({ error: 'An error has occurred.' });
            throw(e);
        });
    }

    handleFormChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    render() {
        const statusMessage = this.state.updated ?
            //include link to profile
            <p>Success! {this.state.name} was updated.</p> : (this.state.error ? <p>Sorry, something went wrong.</p> : null);

        return (
            <React.Fragment>
                {this.state.id !== 0 ? (
                    <Layout page="edit">
                    <Banner title={`Edit ${this.state.name}`} image={this.state.newLogo} />
                    <div className="container">
                        { statusMessage }
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="name">
                                Restaurant Name
                                <input type="text" id="name" name="newName" onChange={this.handleFormChange} value={this.state.newName} />
                            </label>
                            <br />
                            <label htmlFor="likes">
                                Likes
                                <br />
                                <small className="form-help-text">
                                    Add new lines for each point
                                </small>
                                <br />
                                <textarea id="likes" name="newLikes" onChange={this.handleFormChange} value={this.state.newLikes} />
                            </label>
                            <br />
                            <label htmlFor="dislikes">
                                Dislikes
                                <br />
                                <small className="form-help-text">
                                    Add new lines for each point
                                </small>
                                <br />
                                <textarea id="dislikes" name="newDislikes" onChange={this.handleFormChange} value={this.state.newDislikes} />
                            </label>
                            <br />
                            <label htmlFor="notes">
                                Notes
                                <textarea id="notes" name="newNotes" onChange={this.handleFormChange} value={this.state.newNotes} />
                            </label>
                            <br />
                            <label htmlFor="visits">
                                Visits
                                <input type="number" id="visits" name="newVisits" onChange={this.handleFormChange} value={this.state.newVisits}/>
                            </label>
                            <br />
                            <label htmlFor="logo">
                                Logo
                                <textarea id="logo" name="newLogo" onChange={this.handleFormChange} value={this.state.newLogo}/>
                            </label>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </Layout>
                ): null}
            </React.Fragment>
        )
    }
}

export default compose(fromRenderProps(AppContext.Consumer, (context) => (context)))(pageEditResto)