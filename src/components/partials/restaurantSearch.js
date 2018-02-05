import React, { Component, Fragment } from "react";
import RestoTile from "./restoTile";

class RestaurantSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
            console.log(search);
            this.setState({ search });
            document.getElementById("restaurant-search").value == search;
        }
    }

    filterRestaurants = e => {
        var updatedList = this.state.restaurants;
        updatedList = updatedList.filter(function(item) {
            return (
                item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
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
        return (
            <div className="resto-list">
                {listToDisplay.map(r => {
                    return <RestoTile name={r.name} key={r.id} img={r.logo} />;
                })}
            </div>
        )
    };

    render() {
        return (
            <Fragment>
                <div className="search-bar-container">
                    <form className="search-bar">
                        <input
                            type="text"
                            placeholder="Search for restaurant..."
                            onChange={this.filterRestaurants}
                            id="restaurant-search"
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
