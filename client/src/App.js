import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import LandingPage from './routes/LandingPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
