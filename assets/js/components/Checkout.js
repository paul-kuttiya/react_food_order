import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Main from './Main';
import Form from './Checkout/Form';
import Summary from './Checkout/Summary';

const CheckoutBody = (props) => {
  return (
    <div className="order-container">    
      <Form customer={props.customer} updateCustomer={props.updateCustomer} />
      <Summary {...props} />
    </div>
  )
}

class Checkout extends Component {
  render() {
    return (
      <Main>
        <CheckoutBody {...this.props} />
      </Main>
    )
  }
}

Form.propTypes = {
  customer: PropTypes.object.isRequired,
  updateCustomer: PropTypes.func.isRequired,
}

export default Checkout;