import React, { Component } from 'react';
import './App.scss';
import './styles/styles.scss';
import Description from './components/Description/Description.js';
import Header from './components/Header/Header.js';
import List from './components/List/List.js';

class App extends Component {
  
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container main-container">
          <div className="row">
            <div className="col-8">
              <Description />
              <List />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
