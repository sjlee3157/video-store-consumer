import React, { Component } from 'react';
import moment from 'moment';
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
          const releaseDate = moment(movie.release_date).format('MMM Do, YYYY');
          return (
            // <MovieCard
            //   key={ i }
            //   movie={ movie }
            //   selectMovieCallback={ this.props.selectMovieCallback }
            // />
            <div className="card movie-carousel__movie" key={ i }>
              <SelectButton
                buttonType={ 'selectMovie' }
                movie={ movie }
                selectMovieCallback={ this.props.selectMovieCallback } />
              <img className="card-img-top movie-carousel__movie-image"
                src={ movie.image_url } alt={ `${ movie.title }`}/>
              <div className="card-body">
                <h3 className="card-title">{ movie.title }</h3>
                <p className="card-subtitle"><small className="text-muted">Released on: { releaseDate }</small></p>
                <p className="card-text">{ movie.overview }</p>
              </div>

            </div>
          )
        })
      return (
        <div className="movie-carousel">
          <Carousel
            infiniteLoop={ true }
            autoPlay={ true }
            interval={ 10000 }
            showStatus={ false }
            showIndicators={ false}
            centerMode={ true }
            centerSlidePercentage={ 20 }
            selectedItem={ 2 }
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
