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
<<<<<<< HEAD
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
=======
    console.log("Rendering!")
    return <h1> Library Page! </h1>
>>>>>>> a1832875227fc1401de1651d3ee1b81a5614411b
  }
}

export default LibraryPage;
