import React, { Component } from 'react';
import { price } from '../../lib/helper';
import PropTypes from 'prop-types';

class ItemList extends Component {
  constructor() {
    super();

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(e) {
    e.preventDefault();
    const item = this.props.item,
          index = this.props.index;

    this.props.updateCart(index, item);
  }

  render() {
    const item = this.props.item;
    
    return (
      <div className="item">
        <img src={item.image} />
        <div className="info">
          <h4>{item.name}</h4>
          <span>{item.desc}</span>
        </div>
        <div className="bottom">
          <span>${price(item.price)}</span>
          <button
            onClick={this.handleUpdate}
          >
            add to cart
          </button>
        </div>
      </div>
    )
  }
}

ItemList.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),

  index: PropTypes.string.isRequired,
  updateCart: PropTypes.func.isRequired,
}

export default ItemList;