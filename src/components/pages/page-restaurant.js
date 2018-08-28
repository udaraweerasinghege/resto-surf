import React from "react";
import Banner from "../partials/banner";
import Layout from "../layout";

export default ({ restaurant }) => {
    var stringToList = string => {
        return string.split("\n").map(item => {
            return (
                <li key={item}>
                    {item}
                    <br />
                </li>
            );
        });
    };

    const { name, logo, visits, likes, dislikes, notes } = restaurant;

    return (
        <Layout>
            <Banner image={logo} title={name} />
            <div className="restaurant-details container">
                <div className="restaurant-details-section restaurant-details-liked">
                    <h2>We Liked:</h2>
                    <ul>{stringToList(likes)}</ul>
                </div>
                <div className="restaurant-details-section restaurant-details-disliked">
                    <h2>We Didn't Like:</h2>
                    <ul>{stringToList(dislikes)}</ul>
                </div>
                <div className="restaurant-details-section restaurant-details-notes">
                    <h2>Additional Notes:</h2>
                    <ul>{stringToList(notes)}</ul>
                </div>
                <div className="restaurant-details-section restaurant-details-visits">
                    <h2>Visits:</h2>
                    <p id="restaurant-visits-count">{visits}</p>
                    <button className="btn visits-btn">+1</button>
                </div>
            </div>
        </Layout>
    );
};
