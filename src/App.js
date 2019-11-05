import React, { Component } from "react";
import Loader from "./components/partials/loader";
import AppContext, { AppConsumer } from "./context/AppContext";
import Routes from "./Routes";
import "./App.css";
class App extends Component {
    render() {
        return (
            <AppContext>
                <AppConsumer>
                    {({ loading, restaurants, location }) => {
                        return (
                            <React.Fragment>
                                { loading && <Loader /> }
                                { !!restaurants.length && location.latitude >= 0 && <Routes /> }
                            </React.Fragment>
                        )
                    }}
                </AppConsumer>
            </AppContext>
        );
    }
}

export default App;
