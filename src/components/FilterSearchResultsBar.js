import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/FilterSearchResultsBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class FilterSearchResultsBar extends Component {
  constructor() {
    super();

    this.state = {
      query: ''
    }
  }

  onFormChange = (e) => {
    const query = e.target.value
    this.setState({ query });
    this.props.onFilterChangeCallback(query);
    console.log(`Filter search term: ${query}`)
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
  }

  render() {
    const searchIcon = <FontAwesomeIcon icon="search" />
    return (
      <section>
        <form onSubmit={ this.onSubmitHandler }
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false">
          <input
            onClick={ this.clearForm }
            className="searchbar__form-input"
            onChange={ this.onFormChange }
            value={ this.state.query }
            placeholder="Filter Search Results"
            size="40"
          />
          <button className="button button-search"
            type="submit" name="submit">{ searchIcon }</button>
        </form>
      </section>
    )
  }
}

FilterSearchResultsBar.propTypes = {
  onFilterChangeCallback: PropTypes.func
};

export default FilterSearchResultsBar;
