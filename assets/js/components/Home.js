import React from 'react';
import PropTypes from 'prop-types';
import Main from './partials/Main';
import Banner from './Home/Banner';
import DisplayStyle from './Home/DisplayStyle';
import Items from './Home/Items';
import Cart from './partials/Cart';

const HomeBody = (props) => {
  return (
    <div>
      <Banner />
      <DisplayStyle 
        updateStyle={props.updateStyle}
      />
      <Items
        updateCart={props.updateCart} 
        display={props.display} 
      />
      <Cart 
        cart={props.cart} 
        order={props.order} 
        total={props.total} 
        modal={props.modal} 
        toggleModal={props.toggleModal} 
        updateCart={props.updateCart} 
      />
    </div>
  )
}

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
      <Main>
        <HomeBody 
          display={this.state.display} 
          updateStyle={this.updateStyle} 
          {...this.props}
        />
      </Main>
    )
  }
}

export default Home;