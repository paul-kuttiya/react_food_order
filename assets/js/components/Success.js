import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Summary from './Checkout/Summary';
import Main from './Main';
import { Header } from './partials/Cart';

const Address = (props) => {
  return (
    <div className="address">
      <h3>Customer:</h3>
      {
        Object.keys(props.customer).map((key, i) => {
          return (
            <div key={i} className="address-list">
              <span>{key}: </span>
              <span>{props.customer[key]}</span>
            </div>
          )
        })
      }
    </div>
  )
}

class SuccessBody extends Component {
  constructor() {
    super();

    this.handleReset = this.handleReset.bind(this);
  }

  handleReset() {
    const reset = new Promise((resolve, reject) => {
      return resolve(this.props.resetState());
    });

    reset.then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <div className="success-wrapper">
        <div className="success">
          <Address 
            customer={this.props.customer} 
          />
          <Summary 
            displayImage={true} 
            displayButton={false} 
            {...this.props}
          >
            <Header headClass="header">
              <h2>Thank you for your order!</h2>
            </Header>
          </Summary>
        </div>
        <button onClick={this.handleReset} className="back">Back</button>
      </div>
    )
  }
}

const Success = (props) => {
  return (
    <Main disabledLink={true}>
      <SuccessBody {...props} />
    </Main>
  )
}

export default Success;