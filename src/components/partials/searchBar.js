import React from "react";

export default () => (
    <div className="search-bar-container">
        <form className="search-bar" action="/restaurants">
            <i className="fa fa-search" id="search-icon" />
            <input
                type="text"
                placeholder="Search for restaurant..."
                name="search"
                id="search-form"
            />
            <input type="submit" value="Search" />
        </form>
    </div>
);
