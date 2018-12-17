import React, { Component } from 'react';
import logo from './logo.svg';
import AppRouter from './AppRouter'
import './App.css';

class App extends Component {
  render() {
    return (

      <div>
        <header className="App-header">
          <AppRouter />
        </header>
      </div>
    );
  }
}

export default App;
