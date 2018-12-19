import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/SearchList.css';

import _ from '../../node_modules/lodash'
import chunk from '../../node_modules/lodash/array';

import Movie from './Movie'
import AddToLibrary from './AddToLibrary'
import FilterSearchResultsBar from './FilterSearchResultsBar'

import axios from 'axios';
const SEARCH_MOVIES_URL = 'http://localhost:3000/movies?query='


class SearchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      masterListSearchResults: []
      }
  }

  onFilterChange = (query) => {
    console.log(query);
    const regex = new RegExp(query, 'i');
    const searchResults = (this.state.masterListSearchResults).filter((movie) => {
      const keywords = movie.title + ' ' + movie.overview;
      return regex.test(keywords);
    });
    this.setState({ searchResults });
  }

  mapRowToCards = (row) => {
    const rowCards = row.map((movie, i) => {
      return (
        <div className="search-results__card card movie-card" key={ i }>
          <Movie
            key={ i }
            externalId={ movie.external_id }
            id={ movie.id }
            imageUrl ={ movie.image_url }
            overview={ movie.overview }
            releaseDate={ movie.release_date }
            title={ movie.title }
          />
          <AddToLibrary
            { ...movie }
            inventory={ 5 }
            renderAlertCallback= { this.props.renderAlertCallback }
          />
        </div>
      )
    });
    return rowCards;
  }

  render() {
    const getSearchResults = () => {

    const resultsChunkedByRow = _.chunk(this.state.searchResults, 4);
    const searchResults = resultsChunkedByRow.flatMap((row, rowNumber) => {
      return (
        <div className="card-group" key={ rowNumber }>
          { this.mapRowToCards(row) }
        </div>
      )
    });
    console.log(`Successfully Loaded ${ searchResults.length } Search Results`, searchResults)
    return searchResults
  }

    return (
      <div className="search-results__wrapper">
        <FilterSearchResultsBar
          onFilterChangeCallback={ this.onFilterChange } />
        { getSearchResults() }
      </div>
    )
  }

  getMovies() {
    const url = SEARCH_MOVIES_URL + this.props.query;
    axios.get(url)
      .then((response) => {
        console.log(`API GET MOVIES`)
        console.log(response);
        const movieSet = response.data.map((movie) => {
          const newMovie = { ...movie };
          return newMovie;
        })
        this.setState({
          masterListSearchResults: movieSet,
          searchResults: movieSet
        });
      })
      .catch((error) => {
        console.log(error.message);
        // how do you get to the rest of the message body?
      });
  }

  componentDidMount() {
    if (this.props.query !== '') {
      this.getMovies();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.query !== '' ) {
      console.log('update list');
      if (this.props.query !== prevProps.query) {
        this.getMovies();
      }
    }
  }
}

SearchList.propTypes = {
  query: PropTypes.string,
  renderAlertCallback: PropTypes.func
};

export default SearchList;
