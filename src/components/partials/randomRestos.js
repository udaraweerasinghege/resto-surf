import React, { Component, Fragment } from "react";
import RestoTile from "./restoTile";

class RandomRestos extends Component {
    render() {
        const RANDOM_RESTOS_MAX = 8;
        const restaurantList = this.props.restos;
        const maxNum = restaurantList.length;

        let randomRestoArr = [];

        while (randomRestoArr.length < RANDOM_RESTOS_MAX) {
            let randomIndex = randomNum(maxNum);
            let randomRestaurant = restaurantList[randomIndex];
            if (!randomRestoArr.includes(randomRestaurant)) {
                randomRestoArr.push(randomRestaurant);
            }
        }
        return (
            <Fragment>
                {randomRestoArr.map(r => {
                    return <RestoTile name={r.name} key={r.id} img={r.logo} />;
                })}
            </Fragment>
        );
    }
}

export default RandomRestos;

const randomNum = max => {
    return Math.floor(Math.random() * Math.floor(max));
};
