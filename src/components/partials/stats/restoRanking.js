import React from "react";
import { Link } from "react-router-dom";

export default ({ name, rank, visits, slug }) => {
    return (
        <li className="resto-rank-tile" key={name}>
            <Link to={`/restaurants/${slug}`}>
                <p className="resto-rank-tile-rank">#{rank}</p>
                <p className="resto-rank-tile-name">{name}</p>
                <p className="resto-rank-tile-visits">{visits}</p>
            </Link>
        </li>
    );
};
