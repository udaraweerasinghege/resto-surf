import React from "react";

export default ({ name, rank, visits }) => {
    return (
        <li className="resto-rank-tile" key={name}>
            <a href={name}>
                <p className="resto-rank-tile-rank">{rank}</p>
                <p className="resto-rank-tile-name">{name}</p>
                <p className="resto-rank-tile-visits">{visits}</p>
            </a>
        </li>
    );
};
