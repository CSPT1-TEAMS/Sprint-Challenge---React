import React, { Component } from 'react';
import Charcontainer from './components/charcontainer.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: [],
      lukeImage: "https://vignette.wikia.nocookie.net/mugen/images/a/ad/Luke_Skywalker_Ep7.png/revision/latest?cb=20170504134541"
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    const { starwarsChars } = this.state;
    const {lukeImage} = this.state.lukeImage;
    return (
      <div className="App">
      <h1>Star Wars Character Compendium</h1>
      {starwarsChars.map((char, index, lukeImage) => <div > <Charcontainer key={index} character={char}   /></div>)}

      
      </div>
    );
  }
}

export default App;
