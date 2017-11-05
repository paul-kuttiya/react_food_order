import React, { Component } from 'react';
import { Header } from '../partials/Cart';
import { Body } from '../partials/Cart';
import { Footer } from '../partials/Cart';

const Summary = (props) => {
  return (
    <div id="order-summary">
      <Header headClass="header">
        <h2>Order</h2>
      </Header>

      <Body bodyClass="body" {...props} />
      <Footer total={props.total} />
    </div>
  )
}

export default Summary;