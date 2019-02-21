import React, { Fragment } from "react";
import {fromRenderProps, compose} from 'recompose'
import {AppContext} from "../../context/AppContext";
import RestoTile from "./restoTile";

const randomNum = max => {
    return Math.floor(Math.random() * Math.floor(max));
};

const RandomRestos = ({ restaurants, qty }) => {
    if (restaurants) {
        const maxNum = restaurants.length;

        let randomRestoArr = [];

        while (randomRestoArr.length < qty) {
            let randomIndex = randomNum(maxNum);
            let randomRestaurant = restaurants[randomIndex];
            if (!randomRestoArr.includes(randomRestaurant)) {
                randomRestoArr.push(randomRestaurant);
            }
        }
        return (
            <Fragment>
                <p className="rando-resto-desc">
                    Here are some random restaurants for you:
                </p>
                <div className="resto-list">
                    {randomRestoArr.map(r => 
                        <RestoTile name={r.name} key={r.id} img={r.logo} slug={r.slug}/>
                    )}
                </div>
            </Fragment>
        );
    } else {
        return (
            <p className="rando-resto-desc">
                No restaurants found.
            </p>
        )
    }
};

export default compose(fromRenderProps(AppContext.Consumer, (context) => (context)))(RandomRestos)
