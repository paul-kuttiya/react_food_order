import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { price } from '../../../lib/helper';

class CartList extends Component {
  constructor() {
    super();

    this.handleUpdate = this.handleUpdate.bind(this);
  }
  
  handleUpdate(operator, e) {
    e.preventDefault();

    const item = this.props.item,
          index = this.props.index;

    this.props.updateCart(index, item, operator);
  }
  
  render() {
    const item = this.props.item,
          order = this.props.order;

    const displayImage = this.props.displayImage ? "initial" : "none",
          displayButton = this.props.displayButton ? "initial" : "none";

    return (
      <li>
        <div className="list-container">
          <img src={item.image} style={{display: displayImage}} />
          <span>{item.name}</span>
          <div className="edit">
            <span className="quality">{order}</span>
            <a 
              style={{display: displayButton}} 
              className="minus" 
              href="#"
              onClick={(e) => this.handleUpdate("minus", e)}
            >
              <i className="fa fa-minus-circle"></i>
            </a>
            <a 
              style={{display: displayButton}} 
              className="plus" 
              href="#"
              onClick={(e) => this.handleUpdate("plus", e)}
            >
              <i className="fa fa-plus-circle"></i>
            </a>
            <span className="item-price">${price(item.price)}</span>
            <a 
              style={{display: displayButton}} 
              className="delete" 
              href="#" 
              onClick={(e) => this.handleUpdate("delete", e)}
            >
              <i className="fa fa-trash-o"></i>
            </a>
          </div>
        </div>
      </li>
    )
  }
}

CartList.defaultProps = {
  displayImage: false,
  displayButton: true,
}

CartList.propTypes = {
  displayImage: PropTypes.bool.isRequired, 
  displayButton: PropTypes.bool.isRequired,   
  item: PropTypes.object.isRequired,
  order: PropTypes.number.isRequired, 
  updateCart: PropTypes.func.isRequired, 
}

export default CartList;