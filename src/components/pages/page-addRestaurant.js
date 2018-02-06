import React from "react";
import Banner from "../partials/banner";
import Layout from "../layout";

export default () => (
    <Layout>
        <Banner title="Add New" />
        <form>
            <label htmlFor="name">
                Restaurant Name
                <input type="text" id="name" />
            </label>
            <br />
            <label htmlFor="likes">
                Likes
                <br />
                <small className="form-help-text">
                    Add new lines for each point
                </small>
                <br />
                <textarea id="likes" />
            </label>
            <br />
            <label htmlFor="dislikes">
                Dislikes
                <br />
                <small className="form-help-text">
                    Add new lines for each point
                </small>
                <br />
                <textarea id="dislikes" />
            </label>
            <br />
            <label htmlFor="notes">
                Notes
                <textarea id="notes" />
            </label>
            <br />
            <label htmlFor="visits">
                Visits
                <input type="number" id="visits" defaultValue="1" />
            </label>
            <br />
            <label htmlFor="photos">
                Photos
                <textarea id="photos" />
            </label>
        </form>
    </Layout>
);