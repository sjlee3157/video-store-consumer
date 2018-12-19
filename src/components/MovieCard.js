import React from 'react';

import PropTypes from 'prop-types';
import './styles/MovieCard.css';

import Movie from './Movie';
import SelectButton from './SelectButton';

const MovieCard = (props) => {

  const { movie } = props;

  return (
    <div>
      <SelectButton
        buttonType={ 'selectMovie' }
        movie={ movie }
        selectMovieCallback={ props.selectMovieCallback } />
      <Movie
        externalId={movie.external_id}
        id={movie.id}
        imageUrl ={movie.image_url}
        overview={movie.overview}
        releaseDate={movie.release_date}
        title={movie.title} />
     </div>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  selectMovieCallback: PropTypes.func
};

export default MovieCard;
