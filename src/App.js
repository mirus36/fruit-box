import React, { Component } from 'react';
import './App.css';
import Cupboard from './containers/Cupboard'

class App extends Component {
  render() {
    return (
      <div className="Wall">
        <Cupboard />
      </div>
    );
  }
}

export default App;
