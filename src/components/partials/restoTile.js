import React from "react";

export default ({ img, name, slug }) => {
    var divStyle = {
        backgroundImage: `url('${img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    };

    return (
        <a href={slug} className="tile-container" style={divStyle}>
            <div className="tile-name-container">
                <div className="resto-name">
                    <h2>{name}</h2>
                </div>
            </div>
        </a>
    );
};
