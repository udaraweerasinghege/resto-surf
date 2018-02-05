import React, { Component } from "react";
import SearchBar from "../partials/searchBar";
import RandomRestos from "../partials/randomRestos";
import Banner from "../partials/banner";
import Layout from "../layout";

class Home extends Component {
    render() {
        return (
            <Layout page="home">
                <Banner
                    title="Resto Surf"
                    subtitle="Keep a log of your favourite restaurants and dishes!"
                />
                <SearchBar />
                <RandomRestos restos={this.props.restaurants} />
            </Layout>
        );
    }
}

export default Home;
