import React from 'react';
import { Link } from 'react-router-dom';
import CartList from './CartList';
import PropTypes from 'prop-types';
import { price } from '../../../lib/helper';

const Header = (props) => {
  return (
    <div>
      <div className={props.headClass}>
        { props.children }
      </div>
    </div>
  )
}

const Empty = (props) => {
  return (
    <div className={props.bodyClass}>
      <ul className="cart-lists">
        <div className="hungry">
          <h2>Your cart is hungry!</h2>
        </div>
      </ul>
    </div>
  )
}

const Body = (props) => {
  const cart = props.cart,
        order = props.order;
  
  if (Object.keys(order).length === 0) {
    return <Empty />
  }

  return (
    <div className={props.bodyClass}>
      <ul className="cart-lists">
        { 
          Object.keys(cart).map(key => {
            if (order[key]) {
              return (
                <CartList 
                  displayImage={props.displayImage}
                  displayButton={props.displayButton}
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
      { props.children }
    </div>    
  )
}

const Modal = (props) => {
  return (
    <div className="modal" id={props.htmlId} style={{display: props.display}}>
      <div className="modal-content">
        {props.children}
      </div>
    </div>
  )
}

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

Body.propTypes = {
  cart: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired, 
  updateCart: PropTypes.func.isRequired,
  bodyClass: PropTypes.string.isRequired,
}

Footer.propTypes = {
  total: PropTypes.number.isRequired, 
}

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired,  
  total: PropTypes.number.isRequired,
  modal: PropTypes.bool.isRequired, 
  toggleModal: PropTypes.func.isRequired, 
  updateCart: PropTypes.func.isRequired,
}

export { Modal };
export { Header };
export { Body };
export { Footer };
export default Cart;