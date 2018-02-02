import React, { Component } from "react";
import Layout from "../layout";

class Restaurant extends Component {
    stringToList = string => {
        return string.split("\n").map((item, key) => {
            return (
                <li key={key}>
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

        var headerStyle = {
            backgroundImage: `url('${logo}')`
        };

        return (
            <Layout>
                <div className="restaurant-header" style={headerStyle} />
                <div className="restaurant-header-details">
                    <h1 className="restaurant-name">{name}</h1>
                    <hr className="restaurant-divider" />
                </div>
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
