import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/MovieDetails.css';


const URL = "http://localhost:3000/movies/"

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieDetails: {}
      }

  }

  componentDidMount() {
    console.log(this.props)
    const showUrl = URL + this.props.title
    console.log("URL", showUrl)
    axios.get(showUrl)
      .then((response) => {
        console.log(response.data)
        this.setState({movieDetails: response.data})
        })
        .catch((error) => {
          this.setState({
            errorMessage: error.message,
          });
        });
  }

  render() {
    return (
      <div className="details-show">
        <div className="movie-grid">
        <div onClick={this.props.resetMovieDetailsCallback}  className="back-button"> <p> <FontAwesomeIcon icon="arrow-left"/>  Back to Movie Store </p></div>
          <h1 className="movie-title"> {this.state.movieDetails.title } </h1>
          <div className="movie-image">
            <img
              src={ this.state.movieDetails.image_url } alt={ `${ this.state.movieDetails.title }`}
              />
          </div>
            <div className="movie-overview">
              <p className="card-subtitle"><small className="text-muted">
              Released on: { this.state.movieDetails.release_date }</small></p>
              <p>{ this.state.movieDetails.overview }</p>
            </div>
        </div>
      </div>
    )
  }
}

//
// <SelectButton
//   buttonType={ 'selectMovie' }
//   movie={ movie }
//   selectMovieCallback={ this.props.selectMovieCallback } />

export default MovieDetails;
