import React, { Component } from 'react';
import Tetris from './tetris/Tetris';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Tetris />
      </div>
    );
  }
}

export default App;
