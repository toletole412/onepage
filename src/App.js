import React, { Component } from 'react';
import Cards from './Cards'
import './App.css'
import './styles.css'

class App extends Component {
  render() {
    return (
        <div className="App" >

          <div class="text-container">
            <h1>Yoonji Oh</h1>
          </div>
          <div>
          <Cards />
          </div>
      </div>
    );
  }
}

export default App;
