import React, { Component, Fragment } from "react";
import { withRouter } from 'react-router-dom';
import RestoTile from "./restoTile";

class RestaurantSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            restaurants: []
        };
    }

    componentDidMount() {
        const restaurantList = this.props.restaurants;
        if (restaurantList) {
            this.setState({ restaurants: restaurantList }, () => {
                if (this.props.location.state) {
                    this.setState({ search: this.props.location.state.searchTerm}, () => {
                        this.filterRestaurants(this.state.search)
                    })
                }
            });
        }
    };

    handleChange = e => {
        var searchTerm = e.target.value;
        this.setState({ search: searchTerm}, () => {
            this.filterRestaurants(this.state.search)
        })
    }

    filterRestaurants = search => {
        var updatedList = this.state.restaurants;
        updatedList = updatedList.filter(function(item) {
            return (
                item.name.toLowerCase().search(search.toLowerCase()) !== -1
            );
        });
        this.setState({ filteredRestaurants: updatedList });
    };

    restaurantList = () => {
        const listToDisplay = this.state.filteredRestaurants ? this.state.filteredRestaurants : this.state.restaurants;
        if (listToDisplay.length > 0) {
            return (
                <div className="resto-list">
                    {listToDisplay.map(r => 
                        <RestoTile name={r.name} key={r.id} img={r.logo} slug={r.slug}/>
                    )}
                </div>
            )
        } else {
            return (
                <p>No restaurants to display <span role="img" aria-label="disappointed face emoji">😔</span>.</p>
            )
        }
    };

    handleOnClick = e => {
        e.preventDefault();
    };

    render() {
        return (
            <Fragment>
                <div className="search-bar-container">
                    <form className="search-bar">
                        <i className="fa fa-search" id="search-icon"/>
                        <input
                            type="text"
                            placeholder="Search for restaurant..."
                            onChange={this.handleChange}
                            id="restaurant-search"
                            value={this.state.search}
                        />
                        <input type="submit" value="Search" onClick={this.handleOnClick}/>
                    </form>
                </div>
                {this.restaurantList()}
            </Fragment>
        );
    }
}

export default withRouter(RestaurantSearch);
