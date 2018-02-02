import React, { Component } from "react";
import RestoTile from "../partials/restoTile";
import SearchBar from "../partials/searchBar";
import Layout from "../layout";

class ViewAll extends Component {
    render() {
        return (
            <Layout>
                <SearchBar />
                <h1 className="page-title">Restaurant List</h1>
                <div className="resto-list">
                    {this.props.restaurants.map(r => {
                        return <RestoTile name={r.name} key={r.id} img={r.logo} />;
                    })}
                </div>
            </Layout>
        );
    }
}

export default ViewAll;
