import React from 'react';
import NavIcons from './NavIcons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className="nav-container">
      <nav>
        <div id="nav-logo">
          <h1>
            <Link to="/">Food Order</Link>
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
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  cart: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

export default Nav;