import React, { Component } from "react";
import Banner from "../partials/banner";
import Layout from "../layout";

class Restaurant extends Component {
    stringToList = string => {
        return string.split("\n").map((item) => {
            return (
                <li key={item}>
                    {item}
                    <br />
                </li>
            );
        });
    };

    render() {
        const {
            name,
            logo,
            visits,
            likes,
            dislikes,
            notes
        } = this.props.restaurant;

        return (
            <Layout>
                <Banner image={logo} title={name} />
                <div className="restaurant-details">
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
                        <p>{visits}</p>
                        <button className="btn visits-btn">+1</button>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Restaurant;
