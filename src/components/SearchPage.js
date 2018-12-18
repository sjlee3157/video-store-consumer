import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/SearchPage.css';

import SearchList from './SearchList'


class SearchPage extends Component {

  // constructor() {
  //   super();
  //
  //   this.state = {
  //     query: ''
  //   }
  // }

  render() {
    console.log('Search page')
      return (
      <div>
        <h1> Search Page :)</h1>
        <SearchList
          query={ this.props.query }
          renderAlertCallback= { this.props.renderAlertCallback } />
      </div>
    )
  }

  // componentDidUpdate(prevProps) {
  //   console.log('update page');
  //   if (this.props.query !== prevProps.query) {
  //     this.setState( { query: this.props.query });
  //   }
  // }

}

SearchPage.propTypes = {
  query: PropTypes.string,
  renderAlertCallback: PropTypes.func
};

export default SearchPage;
