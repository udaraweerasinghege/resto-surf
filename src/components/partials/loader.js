import React, { Component } from "react";

class Loader extends Component {
  render() {
    if (this.props.loading) {
      return (
        <div className="loader">
          <div className="one" />
          <div className="two" />
        </div>
      );  
    }
  }
}

export default Loader;
