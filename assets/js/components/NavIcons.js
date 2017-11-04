import React from 'react';
import PropTypes from 'prop-types';
import { price } from '../../lib/helper';

class NavIcons extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul className="nav-icons">
        <li>
          <a id="cart-items" href="#" onClick={this.props.toggleModal}>
            <div className="cart">
              <span className="total">{this.props.count}</span>
              <i className="fa fa-shopping-basket"></i>
            </div>
            <span>${price(this.props.total)}</span>
          </a>
        </li>
      </ul>
    )
  }
}

NavIcons.propTypes = {
  toggleModal: PropTypes.func.isRequired, 
  count: PropTypes.number.isRequired,  
  total: PropTypes.number.isRequired,
  cart: PropTypes.object.isRequired, 
}

export default NavIcons;