import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import './styles/SearchBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      query: ''
    }
  }

  onFormChange = (e) => {
    const query = e.target.value
    this.setState({ query });
  }

  onSubmitHandler = async (e) => {
    e.preventDefault();
    const { query } = this.state;
    if (query === '') return console.log('You must enter a search term :(');

    try {
      const callbackPath = await this.props.searchTermCallback(query);
      this.props.history.push(callbackPath); //redirects to link defined in router '/search'
      this.clearForm();
    } catch(error) {
      console.error(error);
      this.clearForm();
    }
  }

  clearForm = () => {
    this.setState({ query: '' })
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
            name="query"
            placeholder="Search movie database by title"
            size="40"
          />
          <button className="button button-search"
            type="submit" name="submit">{ searchIcon }</button>
        </form>
      </section>
    )
  }
}

SearchBar.propTypes = {
  searchTermCallback: PropTypes.func
};

export default withRouter(SearchBar);
