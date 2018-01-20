import React, { Component, Fragment } from "react";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import RestoTile from "./components/RestoTile/RestoTile";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="App">
          <SearchBar />
          <div className="resto-list">
            <RestoTile />
            <RestoTile />
            <RestoTile />
            <RestoTile />
            <RestoTile />
            <RestoTile />
            <RestoTile />
            <RestoTile />
            <RestoTile />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
