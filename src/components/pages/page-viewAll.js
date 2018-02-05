import React, { Component } from "react";
import RestaurantSearch from "../partials/restaurantSearch";
import Banner from "../partials/banner";
import Layout from "../layout";

class ViewAll extends Component {
    render() {
        return (
            <Layout>
                <Banner 
                    title="All Restaurants" 
                    image="/images/header-2.jpg"
                />
                <RestaurantSearch restaurants={this.props.restaurants} />
            </Layout>
        );
    }
}

export default ViewAll;
