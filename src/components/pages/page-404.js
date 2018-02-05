import React, { Component } from "react";
import Banner from "../partials/banner";
import Layout from "../layout";
import SearchBar from "../partials/searchBar";

class NotFound extends Component {
    render() {
        return (
            <Layout>
                <Banner title="404" subtitle="Sorry, couldn't find that page." />
                <SearchBar/>
            </Layout>
        );
    }
}

export default NotFound;