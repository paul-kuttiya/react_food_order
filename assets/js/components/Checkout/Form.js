import React, { Component } from 'react';

const Form = (props) => {
  return (
    <form>
      <h2>
        <i className="fa fa-user"></i>
        <span>Information</span>
      </h2>
      <fieldset>
        <div className="input-wrapper">
          <div className="input-group">
            <label htmlFor="first">Firstname</label>
            <input id="first" name="first" type="text"></input>
          </div>
          <div className="input-group">
            <label htmlFor="last">Lastname</label>
            <input id="last" name="last" type="text"></input>
          </div>
        </div>
        <div className="input-wrapper">
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input id="address" name="address" type="text"></input>
          </div>
          <div className="input-group">
            <label htmlFor="city">City</label>
            <input id="city" name="city" type="text"></input>
          </div>
        </div>
        <div className="input-wrapper">
          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="text"></input>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="text"></input>
          </div>
        </div>
        <h2>
          <i className="fa fa-money"></i>
          <span>Payment</span>
        </h2>
        <div className="input-wrapper">
          <div className="radio-group">
            <input checked="checked" id="cash" name="payment" type="radio" value="cash"></input>
            <label htmlFor="cash">Cash          </label>
          </div>
          <div className="radio-group">
            <input id="card" name="payment" type="radio" value="card"></input>
            <label htmlFor="card">Credit Card          </label>
          </div>
          <div className="radio-group">
            <input id="paypal" name="payment" type="radio" value="palpal"></input>
            <label htmlFor="paypal">Paypal</label>
          </div>
        </div>
        <button type="submit">Order now!</button>
      </fieldset>
    </form>
  )
}

export default Form;