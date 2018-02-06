import React from "react";

export default ({ img, name }) => {
    var divStyle = {
        backgroundImage: `url('${img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    };
    // slug should be generated and kept in db? and unique
    var slug = name.replace(/\s+/g, "-").toLowerCase();
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
