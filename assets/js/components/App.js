import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';

const App = (props) => {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
      </div>
    </Router>
  )
}

export default App;