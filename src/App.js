import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/pages/page-home";
import NotFound from "./components/pages/page-404";
import Stats from "./components/pages/page-stats";
import ViewAll from "./components/pages/page-viewAll";
import Restaurant from "./components/pages/page-restaurant";

import "./App.css";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/all" component={ViewAll} />
                    <Route exact path="/stats" component={Stats} />
                    <Route exact path="/restaurant" component={Restaurant} />
                    <Route exact path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
