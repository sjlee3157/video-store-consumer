import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/LibraryPage.css';

import LibraryList from './LibraryList.js';

class LibraryPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Rendering!")
    return (
      <div>
        <h1> Library Page :)</h1>
        <LibraryList />
      </div>
    )

  }
}


export default LibraryPage;
