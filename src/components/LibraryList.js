import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './styles/LibraryList.css';

import SelectButton from "./SelectButton";
import axios from 'axios';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const URL = 'https://rails-videostore-api.herokuapp.com/movies'

class LibraryList extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
      }
  }

  onImageClick= (movie) => {
    console.log("I'm in the onImageClick!")
    console.log(movie)
    this.props.setCurrentMovieCallback(movie)
  }

  render() {
      const allMovies = this.state.movies
        .reverse()
        .map((movie, i) => {
          const releaseDate = moment(movie.release_date).format('MMM Do, YYYY');
          return (
            <div className="card movie-carousel__movie" key={ i }>
              <SelectButton
                buttonType={ 'selectMovie' }
                movie={ movie }
                selectMovieCallback={ this.props.selectMovieCallback } />
              <img className="card-img-top movie-carousel__movie-image"
                src={ movie.image_url } alt={ `${ movie.title }`} onClick={() => {this.onImageClick(movie)}}/>
              <button className="button" onClick={() => {this.onImageClick(movie)}}> Film Details </button>
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
    this.mounted = true;
    axios.get(URL)
      .then((response) => {
        const movies = response.data;
        if (this.mounted){
          this.setState({ movies });
        }
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
        });
      });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
}

LibraryList.propTypes = {
  selectMovieCallback: PropTypes.func,
  setCurrentMovieCallback: PropTypes.func
}

export default LibraryList;
