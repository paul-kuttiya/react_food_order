import React, { Component } from 'react';
import menuItems from '../../lib/menuItems';
import ItemList from './ItemList';
import PropTypes from 'prop-types';

const Items = (props) => {
  const display = props.display;

  return (
    <div className={props.display} id="menu-items">
      { Object.keys(menuItems).map(key => {
          return (
            <ItemList 
              key={key} 
              index={key} 
              item={menuItems[key]} 
              updateCart={props.updateCart} 
              updateTotal={props.updateTotal}                 
            />
          )
        })
      }
    </div>
  )
}

Items.propTypes = {
  updateCart: PropTypes.func.isRequired,
  updateTotal: PropTypes.func.isRequired,
  display: PropTypes.string.isRequired
}

export default Items;