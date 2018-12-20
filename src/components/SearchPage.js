import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/SearchPage.css';

import SearchList from './SearchList'


class SearchPage extends Component {

  render() {
      return (
      <div>
        <h1> Search Results</h1>
        <SearchList
          query={ this.props.query }
          renderAlertCallback= { this.props.renderAlertCallback }
          movies={ this.props.movies } />
      </div>
    )
  }

}

SearchPage.propTypes = {
  query: PropTypes.string,
  renderAlertCallback: PropTypes.func,
  movies: PropTypes.array.isRequired
};

export default SearchPage;
