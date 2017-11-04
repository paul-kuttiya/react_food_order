import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalList extends Component {
  render() {
    const item = this.props.item,
          order = this.props.order;

    return (
      <li>
        <div className="list-container">
          <span>{item.name}</span>
          <div className="edit">
            <span className="quality">{order}</span>
            <a className="minus" href="#">
              <i className="fa fa-minus-circle"></i>
            </a>
            <a className="plus" href="#">
              <i className="fa fa-plus-circle"></i>
            </a>
            <span className="item-price">${item.price}</span>
            <a className="delete" href="#">
              <i className="fa fa-trash-o"></i>
            </a>
          </div>
        </div>
      </li>      
    )
  }
}

ModalList.propTypes = {
  item: PropTypes.object.isRequired,
  order: PropTypes.number.isRequired,  
}

export default ModalList;