import React, { Component } from 'react';
import Nav from './Nav';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      modal: false,
      total: 0,
      count: 0,
      order: {},
      cart: {},
    }

    this.updateCart = this.updateCart.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);  
    this.toggleModal = this.toggleModal.bind(this);       
  }

  getStorage(string) {
    return JSON.parse(localStorage.getItem(string));
  }

  componentDidMount() {
    Object.keys(this.state).forEach((key, _, arr) => {
      const storage = this.getStorage(key);

      if (!!storage) {
        this.setState({ [key]: storage });
      }
    });
  }

  componentWillUpdate(nextProps, nextState) {
    Object.keys(this.state).forEach(key => {
      if (key !== 'modal') {
        localStorage.setItem(key, JSON.stringify(nextState[key]));
      }
    });
  }
  
  toggleModal(e) {
    e.preventDefault();
    this.setState({modal: !this.state.modal});
  }

  deleteOrder(key) {
    delete this.state.order[key];
    delete this.state.cart[key];

    this.setState({ 
      cart: this.state.cart,
      order: this.state.order 
    });
  }

  updateOrder(key, operator="plus") {
    let order = this.state.order[key],
        orderState = this.state.order;

    if (operator === "plus") {
      order = order || 0;
      order++;
    }
    
    if (operator === "minus") {
      order --;

      if (order === 0) {
        this.deleteOrder(key);
        return;  
      }
    }

    if (operator === "delete") {
      this.deleteOrder(key);      
      return;      
    }
    
    orderState[key] = order
    this.setState({order: orderState});
  }

  updateTotal(index, amount, operator) {
    let current = this.state.total,
        order = this.state.order[index];

    if (operator === "plus") {
      current += amount;
    }

    if ((operator === "minus") && (current > 0)) {
      current -= amount;
    }

    if (operator === "delete") {
      current -= (amount * order);
    }

    this.setState({ total: current });
  }

  updateCount() {
    const count = Object.values(this.state.order)
                        .reduce((tot, order) => {
                          return tot += order;
                        }, 0)

    this.setState({ count: count });
  }

  updateCart(index, item, operator="plus") {
    const amount = item.price;

    this.state.cart[index] = item;
    this.setState({ cart: this.state.cart });

    this.updateTotal(index, amount, operator);
    this.updateOrder(index, operator);
    this.updateCount();
  }

  render() {
    return (
      <div>
        <Nav 
          toggleModal={this.toggleModal} 
          count={this.state.count} 
          cart={this.state.cart} 
          total={this.state.total} 
        />
        {
          React.cloneElement(this.props.children, 
            { 
              cart: this.state.cart,
              order: this.state.order,
              total: this.state.total,
              modal: this.state.modal,
              updateCart: this.updateCart,
              toggleModal: this.toggleModal,
            }
          )
        }
      </div>
    )
  }
}

export default Main;