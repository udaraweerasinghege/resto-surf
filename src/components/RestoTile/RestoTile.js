import React, { Component } from "react";


class RestoTile extends Component {
  render() {
    var divStyle = {
      backgroundImage: `url('${this.props.logo}')`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    };
    return (
      <div className="tile-container" style={divStyle}>
        <div className="tile-name-container">
          <div className="resto-name">{this.props.name}</div>
        </div>
      </div>
    );
  }
}

export default RestoTile;
