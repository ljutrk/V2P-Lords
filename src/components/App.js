import React, { Component } from 'react';
import '../css/App.css';
import Header from './partials/Header';
import Main from './Main';

class App extends Component {
  render() {
    
    return (
      <div className="app">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
