import React, { Fragment } from "react";
import RestoTile from "./restoTile";

const randomNum = max => {
    return Math.floor(Math.random() * Math.floor(max));
};

export default ({ restos }) => {
    const RANDOM_RESTOS_MAX = 8;
    const maxNum = restos.length;

    let randomRestoArr = [];

    while (randomRestoArr.length < RANDOM_RESTOS_MAX) {
        let randomIndex = randomNum(maxNum);
        let randomRestaurant = restos[randomIndex];
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
                {randomRestoArr.map(r => {
                    return <RestoTile name={r.name} key={r.id} img={r.logo} />;
                })}
            </div>
        </Fragment>
    );
};
