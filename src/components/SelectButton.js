import React from 'react';
import PropTypes from 'prop-types';
import './styles/SelectButton.css';


const SelectButton = (props) => {

  const label = ( props.movie ? props.movie.title : props.customer.name )

  const selectMovieButton = (
    <button className="button" onClick={ () => props.selectMovieCallback(props.movie) }>
      + Add To Rental
    </button>
  )

  const selectCustomerButton = (
    <button className="button" onClick={ () => props.selectCustomerCallback(props.customer) }>
      + Add As Renter
    </button>
  )

  return (
    <div className="button">
    { props.buttonType === "selectMovie" && selectMovieButton }
    { props.buttonType === "selectCustomer" && selectCustomerButton }
    </div>
  )
}

SelectButton.propTypes = {
  buttonType: PropTypes.string.isRequired,
  movie: PropTypes.object,
  customer: PropTypes.object,
  selectMovieCallback: PropTypes.func,
  selectCustomerCallback: PropTypes.func
}

export default SelectButton;
