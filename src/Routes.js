import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/page-home";
import NotFound from "./components/pages/page-404";
import Stats from "./components/pages/page-stats";
import ViewAll from "./components/pages/page-viewAll";
import Restaurant from "./components/pages/page-restaurant";
import AddNew from "./components/pages/page-addRestaurant";
import Edit from "./components/pages/page-editRestaurant";

export default () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route
                exact
                path="/"
                component={Home}
            />
            <Route
                exact
                path="/restaurants"
                component={ViewAll}
            />
            <Route
                exact
                path="/stats"
                component={Stats}
            />
            <Route
                exact
                path="/restaurants/:slug"
                component={Restaurant}
            />
            <Route
                exact
                path="/add"
                component={AddNew}
            />
            <Route
                exact
                path="/edit/:id"
                component={Edit}
            />
            <Route exact path="*" component={NotFound} />
        </Switch>
        </BrowserRouter>
    )
}