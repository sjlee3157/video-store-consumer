import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './styles/Movie.css';


const Movie = (props) => {

  const releaseDate = moment( props.releaseDate ).format('MMM Do, YYYY');
  return (

    <div className="card-body">
      <img className="card-img-top"
        src={ props.imageUrl } alt={ props.title }/>
      <h3 className="card-title">{ props.title }</h3>
      <p className="card-subtitle">
        <small className="text-muted">
          Released on: { releaseDate }
        </small>
      </p>
      <p className="card-text">{ props.overview }</p>
    </div>
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
