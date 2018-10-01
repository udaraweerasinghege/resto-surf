import React from "react";
import Banner from "../partials/banner";
import Layout from "../layout";
import SearchBar from "../partials/searchBar";

export default () => (
    <Layout>
        <Banner title="404" subtitle="Sorry, couldn't find that page." image="/images/header-5.jpg" />
        <div className="container">
            <SearchBar />
        </div>
    </Layout>
);
