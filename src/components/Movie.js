import React from 'react';
import PropTypes from 'prop-types';
import './styles/Movie.css';


const Movie = (props) => {

  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.overview}</p>
      <p>Release date: {props.releaseDate}</p>
    </li>
  )
}

Movie.propTypes = {
  id: PropTypes.number,
  externalId: PropTypes.number,
  overview: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string
};

export default Movie;
