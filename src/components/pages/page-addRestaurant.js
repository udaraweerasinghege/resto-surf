import React, { Component } from "react";
import Banner from "../partials/banner";
import Layout from "../layout";

class AddNew extends Component {
    render() {
        return (
            <Layout>
                <Banner title="Add New"/>
                <form>
                    <label for="name">Name</label>
                    <input type="text" id="name"/>
                    <label for="likes">Likes</label>
                    <textarea id="likes"/>
                    <label for="dislikes">Dislikes</label>
                    <textarea id="dislikes"/>
                    <label for="notes">Notes</label>
                    <textarea id="notes"/>
                    <label for="visits">Visits</label>
                    <input type="number" id="visits"/>
                    <label for="photos">Photos</label>
                    <textarea id="photos"/>
                </form>
            </Layout>
        );
    }
}

export default AddNew;