import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "./components/partials/loader";
import Home from "./components/pages/page-home";
import NotFound from "./components/pages/page-404";
import Stats from "./components/pages/page-stats";
import ViewAll from "./components/pages/page-viewAll";
import Restaurant from "./components/pages/page-restaurant";
import AddNew from "./components/pages/page-addRestaurant";

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
                  slug
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
        const { restaurants } =  this.state;
        if (restaurants) {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() =>
                                <Home restaurants={restaurants} {...this.props}/>
                            }
                        />
                        <Route
                            exact
                            path="/restaurants"
                            render={() =>
                                <ViewAll restaurants={restaurants} />
                            }
                        />
                        <Route
                            exact
                            path="/stats"
                            render={() =>
                                <Stats restaurants={restaurants} />
                            }
                        />

                        {/* dynamically create routes with slugs (from db) */}
                        <Route
                            exact
                            path="/restaurants/ding-tai-fung"
                            render={() =>
                                <Restaurant
                                    restaurant={restaurants.find(this.findRestaurant)}
                                />
                            }
                        />
                        <Route
                            exact
                            path="/add"
                            render={() =>
                                <AddNew />
                            }
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
