import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import './styles/SearchBar.css';

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
    } catch(error) {
      console.error(error)
    }
  }

  render() {
    return (
      <section>
        <form onSubmit={ this.onSubmitHandler }>
          <input
            onChange={ this.onFormChange }
            value={ this.state.query }
            name="query"
            placeholder="I'm looking for..."
          />
          <input className="button button-medium" type="submit" name="submit" value="Search Movie Database" />
        </form>
      </section>
    )
  }
}

SearchBar.propTypes = {
  searchTermCallback: PropTypes.func
};

export default withRouter(SearchBar);
