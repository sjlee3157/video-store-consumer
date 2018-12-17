import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/LibraryPage.css';

class LibraryPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Rendering!")
    return <h1> Library Page! </h1>
  }
}


export default LibraryPage;
