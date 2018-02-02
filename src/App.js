import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "./components/partials/loader";
import Home from "./components/pages/page-home";
import NotFound from "./components/pages/page-404";
import Stats from "./components/pages/page-stats";
import ViewAll from "./components/pages/page-viewAll";
import Restaurant from "./components/pages/page-restaurant";

import "./App.css";

class App extends Component {
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
    
    findRestaurant = restaurant => { 
        return restaurant.name === 'Ding Tai Fung';
    }

    render() {
        if (this.state.restaurants) {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Home restaurants={this.state.restaurants} />
                            )}
                        />
                        <Route
                            exact
                            path="/restaurants"
                            render={() => (
                                <ViewAll restaurants={this.state.restaurants} />
                            )}
                        />
                        <Route
                            exact
                            path="/stats"
                            render={() => (
                                <Stats restaurants={this.state.restaurants} />
                            )}
                        />

                        {/* dynamically create routes with slugs (from db) */}
                        <Route
                            exact
                            path="/ding-tai-fung"
                            render={() => (
                                <Restaurant
                                    restaurant={this.state.restaurants.find(this.findRestaurant)}
                                />
                            )}
                        />
                        <Route exact path="*" component={NotFound} />
                    </Switch>
                </BrowserRouter>
            );
        } else {
            return <Loader loading="true" />;
        }
    }
}

export default App;
