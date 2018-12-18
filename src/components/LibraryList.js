import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/LibraryList.css';

import MovieCard from "./MovieCard";
import axios from 'axios';

const URL = 'http://localhost:3000/movies/'

class LibraryList extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
      }
  }

  render() {
      console.log("Rendered Movies:", this.state.movies)
      const allMovies = this.state.movies
        .map((movie, i) => {
          return (
            <MovieCard
              key={ i }
              movie={ movie }
              selectMovieCallback={ this.props.selectMovieCallback } />
          )
        })
      return (
        <div>
          <ul>
           {allMovies}
          </ul>
         </div>
      )
    }

  componentDidMount() {
    axios.get(URL)
      .then((response) => {
        const movieSet = response.data.map((movie) => {
          const newMovie = {
            ...movie,
          };
          return newMovie;
        })

        this.setState({
          movies: movieSet
        });

      })
      .catch((error) => {
        console.log(error.message);
        // this.setState({
        //   errorMessage: error.message,
        // });
      });
  }
}

LibraryList.propTypes = {
  selectMovieCallback: PropTypes.func
}

export default LibraryList;
