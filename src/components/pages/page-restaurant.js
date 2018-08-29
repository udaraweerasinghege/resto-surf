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
                    restaurant(slug: "${slug}") {
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
            const restoData = resto.data.restaurant[0];
            this.setState({
                ...restoData
            });
        } catch (e) {
            throw e;
        }
    };

    stringToList = string =>
        string ?
            string.split("\n").map(item =>
                (
                    <li key={item}>
                        {item}
                        <br/>
                    </li>
                )
            )
            : null;


    render() {
        const {name, logo, visits, likes, dislikes, notes} = this.state;
        return (
            <Layout>
                <Banner image={logo} title={name}/>
                <div className="restaurant-details container">
                    <div className="restaurant-details-section restaurant-details-liked">
                        <h2>We Liked:</h2>
                        <ul>{this.stringToList(likes)}</ul>
                    </div>
                    <div className="restaurant-details-section restaurant-details-disliked">
                        <h2>We Didn't Like:</h2>
                        <ul>{this.stringToList(dislikes)}</ul>
                    </div>
                    <div className="restaurant-details-section restaurant-details-notes">
                        <h2>Additional Notes:</h2>
                        <ul>{this.stringToList(notes)}</ul>
                    </div>
                    <div className="restaurant-details-section restaurant-details-visits">
                        <h2>Visits:</h2>
                        <p id="restaurant-visits-count">{visits}</p>
                        <button className="btn visits-btn">+1</button>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Restaurant;