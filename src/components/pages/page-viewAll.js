import React from "react";
import {fromRenderProps, compose} from 'recompose'
import {AppContext} from "../../context/AppContext";
import RestaurantSearch from "../partials/restaurantSearch";
import Banner from "../partials/banner";
import Layout from "../layout";

const ViewAll = ({ restaurants }) => (
    <Layout>
        <Banner title="All Restaurants" image="/images/header-2.jpg" />
        <div className="container">
            <RestaurantSearch restaurants={restaurants} />
        </div>
    </Layout>
);

export default compose(fromRenderProps(AppContext.Consumer, (context) => (context)))(ViewAll)