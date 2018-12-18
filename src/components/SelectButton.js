import React from 'react';
import PropTypes from 'prop-types';
import './styles/SelectButton.css';


const SelectButton = (props) => {

  const label = ( props.movie ? props.movie.title : props.customer.name )

  const selectMovieButton = (
    <button onClick={ () => props.selectMovieCallback(props.movie) }>
      Select { label }
    </button>
  )

  const selectCustomerButton = (
    <button onClick={ () => props.selectCustomerCallback(props.customer) }>
      Select { label }
    </button>
  )

  return (
    <section>
    { props.buttonType === "selectMovie" && selectMovieButton }
    { props.buttonType === "selectCustomer" && selectCustomerButton }
    </section>
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
