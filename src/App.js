import React, { Component } from 'react';
import RestoTile from './components/RestoTile/RestoTile'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { loading : true}
  }

  render() {
    if(this.state.loading) {
      return (
        <div className="App">
          Loading...
        </div>
      );
    }

    return (
      <div className="App">
        {this.state.restaurants.map((r) => {
          return <RestoTile name={r.name} key={r.id} logo={r.logo}/>
        })}
      </div>
    );
  }

  componentWillMount = () => {
    this.restoRequest();
  }
  
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
      `
      const restoRes = await fetch(`/graphql?query=${query}`);
      const restos = await restoRes.json();
      this.setState({...this.state, restaurants: restos.data.restaurants, loading: false})
    } catch(e) {
      throw(e)
    }
    
  }
}

export default App;
