import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal, { Header, Body, Footer } from '../partials/Modal';

const Summary = (props) => {
  return (
    <div id={props.htmlId}>
      <Header>
        {props.children}
      </Header>
      <Body bodyClass="body" {...props} />
      <Footer total={props.total} />
    </div>
  )
}

Summary.defaultProps = {
  htmlId: "order-summary",
} 

export default Summary;