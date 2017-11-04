import React from 'react';
import ModalList from './ModalList';
import PropTypes from 'prop-types';
import { price } from '../../lib/helper';

const Header = (props) => {
  return (
    <div className="modal-header">
      <span onClick={props.toggleModal} className="close">x</span>
      <h2>Your Cart</h2>
    </div>
  )
}

const Body = (props) => {
  const cart = props.cart,
        order = props.order;
  
  return (
    <div className="modal-body">
      <ul className="cart-lists">
        { 
          Object.keys(cart).map(key => {
            if (order[key]) {
              return (
                <ModalList 
                  key={key} 
                  index={key} 
                  item={cart[key]} 
                  order={props.order[key]} 
                  updateCart={props.updateCart} 
                />
              )
            }
          })
        }
      </ul>
    </div>
  )
}

const Footer = (props) => {
  return (
    <div className="modal-footer">
      <div className="total">
        <h2>
          <span>Total: </span>
          <span>${price(props.total)}</span>
        </h2>
      </div>
      <button className="checkout">
        <h1>
          <a href="#checkout">checkout</a>
        </h1>
      </button>
    </div>    
  )
}

const Modal = (props) => {
  const modal = props.modal,
        display = modal ? "block" : "none";

  return (
    <div className="modal" id="cart" style={{display: display}}>
      <div className="modal-content">
        <Header toggleModal={props.toggleModal} />
        <Body 
          cart={props.cart} 
          order={props.order} 
          updateCart={props.updateCart} 
        />
        <Footer total={props.total} />
      </div>
    </div>
  )
}

Body.propTypes = {
  cart: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired, 
  updateCart: PropTypes.func.isRequired,
}

Modal.propTypes = {
  cart: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired,  
  total: PropTypes.number.isRequired,
  modal: PropTypes.bool.isRequired, 
  toggleModal: PropTypes.func.isRequired, 
  updateCart: PropTypes.func.isRequired,
}

Header.propTypes = {
  toggleModal: PropTypes.func.isRequired, 
}

Footer.propTypes = {
  total: PropTypes.number.isRequired, 
}

export default Modal;