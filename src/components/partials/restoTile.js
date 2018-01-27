import React, { Component } from "react";


class RestoTile extends Component {
  render() {
    var divStyle = {
      backgroundImage: `url('${this.props.img}')`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    };
    return (
      <div className="tile-container" style={divStyle}>
        <div className="tile-name-container">
          <div className="resto-name">
            <h2>{this.props.name}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default RestoTile;
