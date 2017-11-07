import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Main from './Main';
import Form from './Checkout/Form';
import Summary from './Checkout/Summary';
import Modal, { Header, Body, Footer } from './partials/Modal';

const CheckoutBody = (props) => {
  return (
    <div className="order-container">
      <Form 
        order={props.order} 
        customer={props.customer} 
        updateCustomer={props.updateCustomer} 
      />
      <Summary {...props}>
        <Header headClass="header">
          <h2>Order</h2>
        </Header>
      </Summary>
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
  order: PropTypes.object.isRequired,
  customer: PropTypes.object.isRequired,
  updateCustomer: PropTypes.func.isRequired,
}

export default Checkout;