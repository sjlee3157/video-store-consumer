import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/LibraryList.css';

import SelectButton from "./SelectButton";
import axios from 'axios';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
        .reverse()
        .map((movie, i) => {
          console.log(movie);
          return (
            // <MovieCard
            //   key={ i }
            //   movie={ movie }
            //   selectMovieCallback={ this.props.selectMovieCallback }
            // />
            <div key={ i }>
              <SelectButton
                buttonType={ 'selectMovie' }
                movie={ movie }
                selectMovieCallback={ this.props.selectMovieCallback } />
              <img className="carousel__movie-image" src={ movie.image_url } alt="movie image"/>
              <h3>{ movie.title }</h3>
              <p>{ movie.overview }</p>
              <p>Release date: { movie.release_date }</p>
            </div>
          )
        })
      return (
        <div>
          <Carousel
            infiniteLoop={ true }
            autoPlay={ true }
            
            showStatus={ false }
            showIndicators={ false}
            centerMode={ true }
            centerSlidePercentage={ 30 }
            >
            { allMovies }
          </Carousel>
        </div>
      )
    }

  componentDidMount() {
    axios.get(URL)
      .then((response) => {
        const movieSet = response.data.map((movie) => {
          const newMovie = { ...movie };
          return newMovie;
        })

        this.setState({ movies: movieSet });

        })
        .catch((error) => {
          console.log(error.message);
          this.setState({
            errorMessage: error.message,
          });
        });
  }
}

LibraryList.propTypes = {
  selectMovieCallback: PropTypes.func
}

export default LibraryList;
