import React from 'react';

import PropTypes from 'prop-types';
import './styles/LibraryPage.css';

import LibraryList from './LibraryList.js';

const LibraryPage = (props) => {
    return (
      <div>
        <h1>Our Movie Store</h1>
        <LibraryList
          selectMovieCallback={ props.selectMovieCallback }
          setCurrentMovieCallback={ props.setCurrentMovieCallback }
        />
      </div>
    )
}

LibraryPage.propTypes = {
  selectMovieCallback: PropTypes.func,
  setCurrentMovieCallback: PropTypes.func
}

export default LibraryPage;
