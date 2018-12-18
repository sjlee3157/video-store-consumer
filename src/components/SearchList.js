import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/SearchList.css';

import Movie from './Movie'
import AddToLibrary from './AddToLibrary'

import axios from 'axios';
const SEARCH_MOVIES_URL = 'http://localhost:3000/movies?query='


class SearchList extends Component {
  constructor() {
    super();

    this.state = {
      searchResults: []
      }
  }

  render() {
      const getSearchResults = () => {
        const searchResults = this.state.searchResults
        .map((movie, i) => {
          return (
            <section key={i}>
              <Movie
                key={i}
                externalId={movie.external_id}
                id={movie.id}
                imageUrl ={movie.image_url}
                overview={movie.overview}
                releaseDate={movie.release_date}
                title={movie.title}
              />
              <AddToLibrary {...movie} />
            </section>

          )
        })
        console.log(`Successfully Loaded ${ searchResults.length } Search Results`, this.state.searchResults)
        return searchResults
      }

      return (
        <div>
          <ul>
           { getSearchResults() }
          </ul>
         </div>
      )
    }

// TODO: I think this should move to the SearchBar component to
// reduce number of API calls we have to make... I'll think tomorrow SJL
  getMovies() {
    console.log('Get movies');
    console.log(this.props.query);
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
      console.log('mount list');
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
  query: PropTypes.string
};

export default SearchList;
