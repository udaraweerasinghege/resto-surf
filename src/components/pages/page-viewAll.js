import React, { Component } from "react";
import RestoTile from "../partials/restoTile";
import Layout from "../layout";

class ViewAll extends Component {
    render() {
        return (
            <Layout>
                <h1 className="page-title">Restuarant List</h1>
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
