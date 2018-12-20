import React from 'react';
import PropTypes from 'prop-types';
import './styles/AddToLibrary.css';

import axios from 'axios';


const URL = 'http://localhost:3000/movies'

const AddToLibrary = (props) => {
  // let params = {...props};
  // const string = props.image_url
  // params.image_url = string.substr(string.indexOf("w185") + 4)
  // console.log(params.image_url)
  const addMovie = (props) => {
    // console.log("HERE", params)
    axios.post(URL, props)
      .then((response) => {
        console.log(response, props)
        props.renderAlertCallback({"success": `${props.title} successfully added.`})
        })
      .catch((error) => {
        console.log(error.response.data.errors);
        props.renderAlertCallback({"failure": `${error.response.data.errors}`})
      });

  }

  const onButtonClick = () => {
    addMovie(props)
  }

  return <button className="button add-to-library__button" onClick={onButtonClick}>+ Add To Our Library</button>

}

AddToLibrary.propTypes = {
  id: PropTypes.number,
  external_id: PropTypes.number,
  overview: PropTypes.string,
  image_url: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  inventory: PropTypes.number,
  renderAlertCallback: PropTypes.func
};


export default AddToLibrary;
