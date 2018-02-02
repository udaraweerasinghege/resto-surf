import React, { Component } from "react";

class RestoTile extends Component {
  render() {
    var divStyle = {
      backgroundImage: `url('${this.props.img}')`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    };

    // slug should be generated and kept in db? and unique
    var slug = this.props.name.replace(/\s+/g, '-').toLowerCase();

    return (
      <a href={slug} className="tile-container" style={divStyle}>
        <div className="tile-name-container">
          <div className="resto-name">
            <h2>{this.props.name}</h2>
          </div>
        </div>
      </a>
    );
  }
}

export default RestoTile;
