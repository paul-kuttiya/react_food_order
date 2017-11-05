import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DisplayStyle extends Component {

  render() {
    return(
      <div className="display-style">
        <a href="#grid">
          <i 
            className="fa fa-th"
            onClick={this.props.updateStyle}
          >
          </i>
        </a>
        <a href="#list">
          <i 
            className="fa fa-list"
            onClick={this.props.updateStyle}
          >
          </i>
        </a>
      </div>
    )
  }
}

DisplayStyle.propTypes = {
  updateStyle: PropTypes.func.isRequired,  
}

export default DisplayStyle;