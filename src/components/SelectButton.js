import React from 'react';
import PropTypes from 'prop-types';
import './styles/SelectButton.css';


const SelectButton = (props) => {

  return (
    <section>
      <button onClick={ () => props.selectMovieCallback(props.movie) }>
        Select { props.movie.title }
      </button>
    </section>
  )
}

SelectButton.propTypes = {
  movie: PropTypes.object.isRequired,
  selectMovieCallback: PropTypes.func
}

export default SelectButton;
