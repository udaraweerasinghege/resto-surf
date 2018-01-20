import React, { Component } from 'react';

class RestoTile extends Component {

  render() {
    return (
      <div className="tile-container">
        <img src={this.props.logo} className="resto-img" alt="logo" />
        <div className="resto-title">{this.props.name}</div>
      </div>
    );
  }
}

export default RestoTile;
