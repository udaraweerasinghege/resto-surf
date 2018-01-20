import React, { Component } from 'react';
import RestoTile from './components/RestoTile/RestoTile'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RestoTile/>
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
        }
      }
      `
      const restoRes = await fetch(`/graphql?query=${query}`);
      const restos = await restoRes.json();
      this.setState({...this.state, restaurants: restos.data.restaurants})
    } catch(e) {
      throw(e)
    }
    
  }
}

export default App;
