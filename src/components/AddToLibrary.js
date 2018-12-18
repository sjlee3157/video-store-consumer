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
        })
      .catch((errors) => {
        console.log(errors);
      });
  }

  const onButtonClick = () => {
    addMovie(props)
  }

  return <button onClick={onButtonClick}> Add to Library </button>

}


export default AddToLibrary;
