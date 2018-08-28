import React from "react";
import SearchBar from "../partials/searchBar";
import RandomRestos from "../partials/randomRestos";
import Banner from "../partials/banner";
import Layout from "../layout";

export default ({ restaurants }) => (
    <Layout page="home">
        <Banner
            title="Resto Surf"
            subtitle="Keep a log of your favourite restaurants and dishes!"
            image="/images/header-1.jpg"
        />
        <SearchBar />
        <RandomRestos restos={restaurants} />
    </Layout>
);
