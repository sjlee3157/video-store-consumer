import React, { Component } from 'react';

import PropTypes from 'prop-types';
import './styles/ReturnRentalsSearchBar.css';

class ReturnRentalsSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '' }
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
  }

  onFormChange = (e) => {
    const query = e.target.value;
    this.setState({ query })
  }

  clearForm = () => {
    this.setState({ query: '' })
  }

  render() {
    const searchIcon = "Go!";

    return (
        <div>
          <form onSubmit={ this.onSubmitHandler }
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            onClick={ this.clearForm }
          >
            <input
              className="searchbar__form-input"
              onChange={ this.onFormChange }
              value={ this.state.query }
              placeholder="Look up rentals by movie title"
              size="40"
            />
            <button className="button button-search"
              type="submit" name="submit">
              { searchIcon }
            </button>
          </form>
        </div>
    )
  }
}

ReturnRentalsSearchBar.propTypes = {
}

export default ReturnRentalsSearchBar;
