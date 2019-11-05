import React, {Component} from "react";
import Banner from "../partials/banner";
import Layout from "../layout";

class Restaurant extends Component {
    state = {
        slug: '',
        name: '',
        logo: '',
        visits: '',
        likes: '',
        dislikes: '',
        notes: '',
        id: 0
    };

    componentDidMount() {
        const slug = this.props.match.params.slug;
        this.setState({slug}, () => {
            this.getRestaurantData(this.state.slug);
        })
    }

    getRestaurantData = async (slug) => {
        try {
            const query = `
                {
                    restaurantSlug(slug: "${slug}") {
                        id
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
            const restoData = resto.data.restaurantSlug[0];
            this.setState({
                ...restoData
            }, () => {
                console.log(this.state);
            });
        } catch (e) {
            throw e;
        }
    };

    stringToList = string =>
        string && string.split('<br />').map(item => (
            <li key={item}>
                {item}
                <br/>
            </li> ));

    render() {
        const {name, logo, visits, likes, dislikes, notes, id} = this.state;
        return (
            <Layout>
            {id !== 0 &&
                <React.Fragment>
                    <Banner image={logo} title={name} id={id} edit={true}/>
                    <div className="restaurant-details container">
                        <div className="restaurant-details-section restaurant-details-liked">
                            <h2>Definitely order:</h2>
                            <ul>{this.stringToList(likes)}</ul>
                        </div>
                        <div className="restaurant-details-section restaurant-details-disliked">
                            <h2>Do not order:</h2>
                            <ul>{this.stringToList(dislikes)}</ul>
                        </div>
                        <div className="restaurant-details-section restaurant-details-notes">
                            <h2>Notes:</h2>
                            <ul>{this.stringToList(notes)}</ul>
                        </div>
                        <div className="restaurant-details-section restaurant-details-visits">
                            <h2>Visits:</h2>
                            <p id="restaurant-visits-count">{visits}</p>
                            <button className="btn visits-btn">+1</button>
                        </div>
                    </div>
                </React.Fragment>}
            </Layout>
        );
    }
}

export default Restaurant;