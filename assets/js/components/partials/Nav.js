import React from 'react';
import NavIcons from './NavIcons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
  return (
    <Link to="/">Food Order</Link>
  )
}

const Nav = (props) => {
  const disabledLink = props.disabledLink ? "Food Order" : <NavLink />;

  return (
    <div className="nav-container">
      <nav>
        <div id="nav-logo">
          <h1>
            { disabledLink }
          </h1>
        </div>
        <NavIcons 
          toggleModal={props.toggleModal} 
          count={props.count} 
          total={props.total} 
          cart={props.cart}       
        />
      </nav>
    </div>
  )
}

Nav.propTypes = {
  disabledLink: PropTypes.bool.isRequired,  
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  cart: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

Nav.defaultProps = {
  disabledLink: false,  
}

export default Nav;