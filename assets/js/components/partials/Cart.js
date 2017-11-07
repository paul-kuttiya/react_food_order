import React from 'react';
import { Link } from 'react-router-dom';
import CartList from './CartList';
import PropTypes from 'prop-types';
import Modal, { Header, Body, Footer } from './Modal';

const Cart = (props) => {
  const modal = props.modal,
        display = modal ? "block" : "none";

  return (
    <Modal htmlId="cart" display={display}>
      <Header headClass="modal-header" toggleModal={props.toggleModal}>
        <span onClick={props.toggleModal} className="close">x</span>
        <h2>Your Cart</h2>
      </Header>
      <Body 
        displayImage={props.displayImage}
        displayButton={props.displayButton}        
        bodyClass="modal-body" 
        cart={props.cart} 
        order={props.order} 
        updateCart={props.updateCart} 
      />
      <Footer total={props.total}>
        <button className="checkout">
          <h1>
            <Link to="/checkout">
              checkout
            </Link>
          </h1>
        </button>
      </Footer>
    </Modal>
  )
}

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired,  
  total: PropTypes.number.isRequired,
  modal: PropTypes.bool.isRequired, 
  toggleModal: PropTypes.func.isRequired, 
  updateCart: PropTypes.func.isRequired,
}

export default Cart;