import React from 'react';

import PropTypes from 'prop-types';
import './styles/LibraryPage.css';

import LibraryList from './LibraryList.js';

const LibraryPage = (props) => {
    return (
      <div>
        <h1>Our Movie Store</h1>
        <LibraryList
          selectMovieCallback= { props.selectMovieCallback }/>
      </div>
    )
}

LibraryPage.propTypes = {
  selectMovieCallback: PropTypes.func
}

export default LibraryPage;
