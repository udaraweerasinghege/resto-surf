import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class searchBar extends Component {
    state = {
        searchTerm: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.history.push({
            pathname: '/restaurants',
            state: { searchTerm: this.state.searchTerm },
        })
    };

    handleChange = e => {
        this.setState({ searchTerm: e.target.value })
    };

    render() {
        const { searchTerm } = this.state;
        return (
            <div className="search-bar-container">
                <form className="search-bar" onSubmit={this.handleSubmit}>
                    <i className="fa fa-search" id="search-icon"/>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Search for restaurant..."
                        name="search"
                        id="search-form"
                        value={searchTerm}
                    />
                    <input type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}

export default withRouter(searchBar);

