import React from 'react';
import PropTypes from 'prop-types';
import './styles/SelectButton.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SelectButton = (props) => {

  const selectMovieButton = (
    <button className="button" onClick={ () => props.selectMovieCallback(props.movie) }>
      <FontAwesomeIcon icon="plus" />
    </button>
  )

  const selectCustomerButton = (
    <button className="button" onClick={ () => props.selectCustomerCallback(props.customer) }>
      <FontAwesomeIcon icon="plus" />
    </button>
  )

  const selectRentalButton = (
    <button className="button" onClick={ () => props.checkInCallback(props.rental) }>
      Check In
    </button>
  )

  return (
    <div>
    { props.buttonType === "selectMovie" && selectMovieButton }
    { props.buttonType === "selectCustomer" && selectCustomerButton }
    { props.buttonType === "selectRental" && selectRentalButton }
    </div>
  )
}

SelectButton.propTypes = {
  buttonType: PropTypes.string.isRequired,
  movie: PropTypes.object,
  customer: PropTypes.object,
  rental: PropTypes.object,
  selectMovieCallback: PropTypes.func,
  selectCustomerCallback: PropTypes.func,
  checkInCallback: PropTypes.func
}

export default SelectButton;
