import React, { Component } from 'react';
import PropTypes from 'prop-types';

const InputText = (props) => {
  const value = props.customer[props.for];

  return (
    <div className="input-group">
      <label htmlFor={props.for}>{props.label}</label>
      <input 
        onChange={props.handleInput} 
        id={props.for} name={props.for} 
        value={value}
        type={props.type} required 
      />
    </div>
  )
}

const InputRadio = (props) => {
  const is_checked = (props.for === props.customer["payment"]);

  return (
    <div className="radio-group">
      <input 
        onChange={props.handleInput} 
        id={props.for} 
        name="payment" 
        type="radio" 
        value={props.for} 
        checked={is_checked} />
      <label htmlFor={props.for}>{props.label}</label>
    </div>
  )
}

const Info = (props) => {
  return (
    <div className="input-wrapper">
      <h2>
        <i className="fa fa-user"></i>
        <span>Information</span>
      </h2>
      <div className="input-info">
        <InputText for="first" label="Firstname" handleInput={props.handleInput} customer={props.customer} />
        <InputText for="last" label="Lastname" handleInput={props.handleInput} customer={props.customer} />
        <InputText for="address" label="Address" handleInput={props.handleInput} customer={props.customer} />
        <InputText for="city" label="City" handleInput={props.handleInput} customer={props.customer} />
        <InputText for="phone" label="Phone" type="tel" handleInput={props.handleInput} customer={props.customer} />
        <InputText for="email" label="Email" type="email" handleInput={props.handleInput} customer={props.customer} />
      </div>
    </div>
  )
}

const Payment = (props) => {
  return (
    <div className="input-wrapper">
      <h2>
        <i className="fa fa-money"></i>
        <span>Payment</span>
      </h2>
      <div className="payments-info">
        <InputRadio for="cash" label="Cash" handleInput={props.handleInput} customer={props.customer} />        
        <InputRadio for="card" label="Credit Card" handleInput={props.handleInput} customer={props.customer} />                
        <InputRadio for="paypal" label="Paypal" handleInput={props.handleInput} customer={props.customer} />                
      </div>
    </div>
  )
}

class Form extends Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const name = e.target.name,
          value = e.target.value;

    this.props.updateCustomer(name, value);
  }

  render() {
    return (
      <form>
        <Info 
          customer={this.props.customer} 
          updateCustomer={this.props.updateCustomer} 
          handleInput={this.handleInput} 
        />
        <Payment 
          customer={this.props.customer} 
          updateCustomer={this.props.updateCustomer} 
          handleInput={this.handleInput} 
        />
        <button type="submit">Order now!</button>
      </form>
    )
  }
}

InputText.defaultProps = {
  type: 'text',
};

InputText.propTypes = {
  customer: PropTypes.object.isRequired,
  for: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
}

InputRadio.propTypes = {
  customer: PropTypes.object.isRequired,
  for: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
}

Payment.propTypes = {
  customer: PropTypes.object.isRequired,
  updateCustomer: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired, 
}

Info.propTypes = {
  customer: PropTypes.object.isRequired,
  updateCustomer: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,   
}

export default Form;