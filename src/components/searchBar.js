import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <form>
            <input type="text" placeholder="Search for restaurant..."/><input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
