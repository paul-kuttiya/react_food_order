import React, { Component } from 'react';
import Main from './partials/Main';
import Form from './Checkout/Form';
import Summary from './Checkout/Summary';

const Body = (props) => {
  return (
    <div className="order-container">    
      <Form />
      <Summary {...props} />
    </div>
  )
}

class Checkout extends Component {
  render() {
    return (
      <Main>
        <Body {...this.props} />
      </Main>
    )
  }
}

export default Checkout;