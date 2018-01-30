import React, { Component } from "react";
import SearchBar from "../partials/searchBar";
import RandomRestos from "../partials/randomRestos";
import Loader from "../partials/loader";
import Layout from "../layout";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    componentWillMount = () => {
        this.restoRequest();
    };

    restoRequest = async () => {
        try {
            const query = `
              {
                restaurants {
                  id
                  name
                  logo
                  likes
                  dislikes
                  notes
                  visits
                }
              }
            `;
            const restoRes = await fetch(`/graphql?query=${query}`);
            const restos = await restoRes.json();
            this.setState({
                ...this.state,
                restaurants: restos.data.restaurants,
                loading: false
            });
        } catch (e) {
            throw e;
        }
    };

    render() {
        if (this.state.restaurants) {
            return (
                <Layout>
                    <SearchBar />
                    <RandomRestos restos={this.state.restaurants} />
                </Layout>
            );
        } else {
            return <Loader loading="true" />;
        }
    }
}

export default Home;
