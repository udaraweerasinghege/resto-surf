import React, { Component } from "react";

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar-container">
                <form className="search-bar" action="/restaurants">
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
    }
}

export default SearchBar;