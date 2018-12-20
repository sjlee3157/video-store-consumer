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

  submitButton = () => {
    if (this.props.searchType === "searchResults") {
      return ( <FontAwesomeIcon icon="search" /> )
    } else if (this.props.searchType === "rentals") {
      return ('Go!')
    }
  }

  placeholder = () => {
    if (this.props.searchType === "searchResults") {
      return ('Filter Search Results')
    } else if (this.props.searchType === "rentals") {
      return ('Look up rental by title or customer')
    }
  }

  cssClass = () => {
    if (this.props.searchType === "searchResults") {
      return ("filter__searchbar-search")
    } else if (this.props.searchType === "rentals") {
      return ("filter__searchbar-rentals")
    }
  }

  render() {
    return (
      <section>
        <form onSubmit={ this.onSubmitHandler }
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false">
          <input
            onClick={ this.clearForm }
            className={ this.cssClass() }
            onChange={ this.onFormChange }
            value={ this.state.query }
            placeholder={ this.placeholder() }
            size="40"
          />
          <button className="button button-search button-search-filter"
            type="submit" name="submit">{ this.submitButton() }</button>
        </form>
      </section>
    )
  }
}

FilterSearchResultsBar.propTypes = {
  onFilterChangeCallback: PropTypes.func,
  searchType: PropTypes.string.isRequired
};

export default FilterSearchResultsBar;
