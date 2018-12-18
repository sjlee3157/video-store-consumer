import React, { Component } from 'react';
import axios from 'axios';
import Movie from "./Movie"
import PropTypes from 'prop-types';
import './styles/LibraryPage.css';


const URL = 'http://localhost:3000/movies/'

class LibraryPage extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
      }
  }


  componentDidMount() {
    axios.get(URL)
      .then((response) => {
        const movieSet = response.data.map((movie) => {
          console.log(movie)
          const newMovie = {
            ...movie,
          };
          console.log(newMovie)
          return newMovie;
        })

        this.setState({
          movies: movieSet
        });

      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        });
      });
  }


  render() {
    console.log("Rendered Movies:", this.state.movies)
    const allMovies = this.state.movies
      .map((movie, i) => {
        return (
          <Movie
            key={i}
            externalId={movie.external_id}
            id={movie.id}
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

}

export default LibraryPage;
