import React, { Component } from "react";
import SearchBar from "../partials/searchBar";
import RandomRestos from "../partials/randomRestos";
import Layout from "../layout";

class Home extends Component {

    render() {
        return (
            <Layout>
                <SearchBar />
                <RandomRestos restos={this.props.restaurants} />
            </Layout>
        );
    }
}

export default Home;
