import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/SearchPage.css';

import SearchList from './SearchList'


class SearchPage extends Component {

  render() {
    console.log('Search page')
      return (
      <div>
        <h1> Search Results</h1>
        <SearchList
          query={ this.props.query }
          renderAlertCallback= { this.props.renderAlertCallback } />
      </div>
    )
  }

}

SearchPage.propTypes = {
  query: PropTypes.string,
  renderAlertCallback: PropTypes.func
};

export default SearchPage;
