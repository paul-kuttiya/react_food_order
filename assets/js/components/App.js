import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Success from './Success';

const App = (props) => {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/success" component={Success} />        
      </div>
    </Router>
  )
}

export default App;