import React, { Component } from 'react';
import Nav from './partials/Nav';

class Main extends Component {
  constructor() {
    super();
    
    this.state = {
      modal: false,
      total: 0,
      count: 0,
      order: {},
      cart: {},
      customer: {
        //react will alert if no initial state;
        first: '',
        last: '',
        address: '',
        city: '',
        phone: '',
        email: '',
        payment: "cash"
      }
    }

    this.initialState = this.state;

    this.updateCart = this.updateCart.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
    this.updateCustomer = this.updateCustomer.bind(this);    
    this.deleteOrder = this.deleteOrder.bind(this);  
    this.toggleModal = this.toggleModal.bind(this);
    this.resetState = this.resetState.bind(this);     
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

  updateCustomer(InfoKey, value) {
    const customer = this.state.customer;

    customer[InfoKey] = value;
    this.setState({ customer: customer });
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

  resetState() {
    this.setState(this.initialState);
    return true;
  }

  render() {
    return (
      <div>
        <Nav 
          disabledLink={this.props.disabledLink} 
          toggleModal={this.toggleModal} 
          count={this.state.count} 
          cart={this.state.cart} 
          total={this.state.total} 
        />
        <div className="content-wrapper">
          {
            React.cloneElement(this.props.children, 
              { 
                cart: this.state.cart,
                order: this.state.order,
                total: this.state.total,
                customer: this.state.customer,
                modal: this.state.modal,
                updateCustomer: this.updateCustomer,
                updateCart: this.updateCart,
                toggleModal: this.toggleModal,
                resetState: this.resetState,
              }
            )
          }
        </div>
      </div>
    )
  }
}

export default Main;