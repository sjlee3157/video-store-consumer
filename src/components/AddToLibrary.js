import React from 'react';
import PropTypes from 'prop-types';
import './styles/AddToLibrary.css';

import axios from 'axios';

const URL = 'https://rails-videostore-api.herokuapp.com/movies'

const AddToLibrary = (props) => {
  // let params = {...props};
  // const string = props.image_url
  // params.image_url = string.substr(string.indexOf("w185") + 4)
  // console.log(params.image_url)
  const addMovie = () => {
    // console.log("HERE", props)
    const params = {
      title: props.title,
      overview: props.overview,
      release_date: props.release_date,
      inventory: props.inventory,
      image_url: props.image_url,
      external_id: props.external_id
    }
    axios.post(URL, params)
      .then((response) => {
        console.log(response, params)
        props.renderAlertCallback({"success": `${params.title} successfully added.`})
        })
      .catch((error) => {
        console.log(error.response.data.errors);
        props.renderAlertCallback({"failure": `${error.response.data.errors}`})
      });
  }

  // whichButton = (movie) => {
  //   if ( this.titleFoundInLibrary(movie.title) ) {
  //     return (
  //       <button className="button button-disabled">In Our Store</button>
  //     )
  //   } else {
  //     return (
  //       <AddToLibrary
  //         { ...movie }
  //         inventory={ DEFAULT_INVENTORY }
  //         renderAlertCallback= { this.props.renderAlertCallback }
  //       />
  //     )
  //   }
  // }

  return (
    <button className="button add-to-library__button" onClick={ addMovie }>
      + Add To Our Library
    </button>
  )

}

AddToLibrary.propTypes = {
  external_id: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  inventory: PropTypes.number.isRequired,
  renderAlertCallback: PropTypes.func
};


export default AddToLibrary;
