import React, { Component, Fragment } from "react";
import RestoTile from "./restoTile";

class RestaurantSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    componentWillMount = () => {
        const restaurantList = this.props.restaurants;
        if (restaurantList) {
            this.setState({ restaurants: restaurantList });
        }
    };
    
    componentDidMount = () => {        
        var url_string = window.location.href;
        var url = new URL(url_string);
        var search = url.searchParams.get("search");
        if (search) {
            this.setState({ search }, function() {
                var searchTerm = this.state.search;
                document.getElementById("restaurant-search").value == searchTerm;
                this.filterRestaurants(searchTerm);
            });
        }
    }

    handleChange = e => {
        var searchTerm = e.target.value;
        this.setState({search: searchTerm}, function() {
            var searchState = this.state.search;
            this.filterRestaurants(searchState)
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
        var listToDisplay;
        if (this.state.filteredRestaurants) {
            listToDisplay = this.state.filteredRestaurants;
        } else {
            listToDisplay = this.state.restaurants;
        }
        if (listToDisplay.length > 0) {
            return (
                <div className="resto-list">
                    {listToDisplay.map(r => {
                        return <RestoTile name={r.name} key={r.id} img={r.logo} />;
                    })}
                </div>
            )
        } else {
            return (
                <p>No restaurants to display.</p>
            )
        }
    };

    render() {
        return (
            <Fragment>
                <div className="search-bar-container">
                    <form className="search-bar">
                        <input
                            type="text"
                            placeholder="Search for restaurant..."
                            onChange={this.handleChange}
                            id="restaurant-search"
                            value={this.state.search}
                        />
                        <input type="submit" value="Search" />
                    </form>
                </div>
                {this.restaurantList()}
            </Fragment>
        );
    }
}

export default RestaurantSearch;
