import React from 'react';

import PropTypes from 'prop-types';
import './styles/LibraryPage.css';

import LibraryList from './LibraryList.js';

const LibraryPage = (props) => {
    return (
      <div>
        <h1> Library Page :)</h1>
        <LibraryList />
      </div>
    )
}

export default LibraryPage;
