import React from 'react';
import PropTypes from 'prop-types';
import CartList from './CartList';
import { price } from '../../../lib/helper';

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

const Header = (props) => {
  return (
    <div>
      <div className={props.headClass}>
        { props.children }
      </div>
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

Body.propTypes = {
  cart: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired, 
  updateCart: PropTypes.func.isRequired,
  bodyClass: PropTypes.string.isRequired,
}

Footer.propTypes = {
  total: PropTypes.number.isRequired, 
}

export { Header, Body, Footer  };
export default Modal;