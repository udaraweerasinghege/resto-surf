import React from "react";
import RestaurantSearch from "../partials/restaurantSearch";
import Banner from "../partials/banner";
import Layout from "../layout";

export default ({ restaurants }) => (
    <Layout>
        <Banner title="All Restaurants" image="/images/header-2.jpg" />
        <div className="container">
            <RestaurantSearch restaurants={restaurants} />
        </div>
    </Layout>
);
