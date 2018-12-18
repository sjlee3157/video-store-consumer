import React from 'react';
import PropTypes from 'prop-types';
import './styles/AddToLibrary.css';

import axios from 'axios';


const URL = 'http://localhost:3000/movies'

const AddToLibrary = (props) => {

  const addMovie = (props) => {
    axios.post(URL, props)
      .then((response) => {
        console.log(response, props)
        props.renderAlertCallback(`${props.title} successfully added.`)
        })
      .catch((errors) => {
        console.log(errors);
        props.renderAlertCallback(`${errors}`)
      });

  }

  const onButtonClick = () => {
    addMovie(props)
  }

  return <button onClick={onButtonClick}> Add to Library </button>

}

AddToLibrary.propTypes = {
  id: PropTypes.number,
  externalId: PropTypes.number,
  overview: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  inventory: PropTypes.number,
  renderAlertCallback: PropTypes.func
};


export default AddToLibrary;
