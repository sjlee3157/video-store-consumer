import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/LibraryList.css';

import Movie from "./Movie"
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
              <Movie
                key={i}
                externalId={parseInt(movie.external_id, 10)}
                id={parseInt(movie.id, 10)}
                imageUrl ={movie.image_url}
                overview={movie.overview}
                releaseDate={movie.release_date}
                title={movie.title}
              />
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

export default LibraryList;
