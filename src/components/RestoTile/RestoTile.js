import React, { Component } from "react";

var restoName = 'Kinton Ramen';
var restoImg =
  "https://s3-media1.fl.yelpcdn.com/bphoto/qwiWkf_pc4Nha4HMsvjLxg/ls.jpg";

var divStyle = {
  backgroundImage: "url(" + restoImg + ")",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

class RestoTile extends Component {
  render() {
    return (
      <div className="tile-container" style={ divStyle }>
        <div className="tile-name-container">
          <h2 className="resto-name">{ restoName }</h2>
        </div>
      </div>
    );
  }
}

export default RestoTile;
