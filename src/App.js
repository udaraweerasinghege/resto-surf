import React, { Component, Fragment } from "react";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import RestoTile from "./components/RestoTile/RestoTile";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  render() {
    if (this.state.loading) {
      return <div className="App">Loading...</div>;
    }

    return (
      <Fragment>
        <Header />
        <div className="App">
          <SearchBar />
          <div className="resto-list">
            {this.state.restaurants.map(r => {
              return <RestoTile name={r.name} key={r.id} logo={r.logo} />;
            })}
          </div>
        </div>
      </Fragment>
    );
  }

  componentWillMount = () => {
    this.restoRequest();
  };

  restoRequest = async () => {
    try {
      const query = `
      {
        restaurants {
          id
          name
          logo
        }
      }
      `;
      const restoRes = await fetch(`/graphql?query=${query}`);
      const restos = await restoRes.json();
      this.setState({
        ...this.state,
        restaurants: restos.data.restaurants,
        loading: false
      });
    } catch (e) {
      throw e;
    }
  };
}

export default App;
