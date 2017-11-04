import React, { Component } from 'react';
import Nav from './Nav';
import Home from './Home';

class App extends Component {
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

  updateOrder(key) {
    this.state.order[key] = this.state.order[key] || 0;
    this.state.order[key]++;
  }

  updateTotal(total) {
    let current = this.state.total;

    current += total;
    this.setState({ total: current });
  }

  updateCount() {
    const count = Object.values(this.state.order)
                        .reduce((tot, order) => {
                          return tot += order;
                        }, 0)

    this.setState({ count: count });
  }

  updateCart(key, item) {
    this.state.cart[key] = item;
    this.setState({cart: this.state.cart});

    this.updateOrder(key);
    this.updateCount();
  }

  render() {
    return (
      <div className="container">
        <Nav 
          toggleModal={this.toggleModal} 
          count={this.state.count} 
          cart={this.state.cart} 
          total={this.state.total} 
        />
        <Home 
          cart={this.state.cart} 
          order={this.state.order} 
          total={this.state.total} 
          modal={this.state.modal} 
          updateCart={this.updateCart} 
          updateTotal={this.updateTotal} 
          toggleModal={this.toggleModal} 
        />
      </div>
    )
  }
}

export default App;