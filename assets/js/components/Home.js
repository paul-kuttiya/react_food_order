import React from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner';
import DisplayStyle from './DisplayStyle';
import Items from './Items';
import Modal from './Modal';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      display: 'grid',
    }

    this.updateStyle = this.updateStyle.bind(this);
  }

  updateStyle(e) {
    e.preventDefault();
    e.stopPropagation();

    const display = e.target.closest("a")
    .getAttribute("href")
    .replace(/#/, '');
    
    this.setState({ display: display });
  }

  render() {
    return(
      <div>
        <Banner />
        <DisplayStyle 
          updateStyle={this.updateStyle}
        />
        <Items
          updateCart={this.props.updateCart} 
          display={this.state.display} 
        />
        <Modal 
          cart={this.props.cart} 
          order={this.props.order} 
          total={this.props.total} 
          modal={this.props.modal} 
          toggleModal={this.props.toggleModal} 
          updateCart={this.props.updateCart} 
        />
      </div>
    )
  }
}

Home.propTypes = {
  updateCart: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired, 
  cart: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired,  
  total: PropTypes.number.isRequired,
  modal: PropTypes.bool.isRequired, 
}

export default Home;