import React from 'react';
import moment from 'moment';
import axios from 'axios';
import PropTypes from 'prop-types';
import './styles/CheckOutForm.css';


const CheckOutForm = (props) => {

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (props.selectedMovie.title && props.selectedCustomer.id ) {
      rentMovie();
      props.resetCheckOutFormCallback();
    } else {
      console.log('did not submit. both fields must be filled out');
    }
  }

  const rentMovie = () => {
    console.log('renting movie (POST request)');

    // SJL: Defaulting due date to 7 days from today
    const dueDate = moment().add(7, 'days').format("MMM DD YYYY");
    const { selectedMovie, selectedCustomer } = props;
    const title = selectedMovie.title
    const params = {
      customer_id: selectedCustomer.id,
      due_date: dueDate,
      renderAlertCallback: props.renderAlertCallback
    }

    const checkOutUrl = `https://rails-videostore-api.herokuapp.com/rentals/${title}/check-out`

    axios.post(checkOutUrl, params)
      .then((response) => {
        params.renderAlertCallback({"success": `${selectedCustomer.name} has checked out ${selectedMovie.title}.`})
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
        params.renderAlertCallback({"failure":`This rental could not be created`})
      })
  }

  const visibility = () => {
    if (props.selectedMovie.title && props.selectedCustomer.name) {
      return ""
    } else {
      return "disabled"
    }
  }

  return (
    <section className="checkout-form">
      <form onSubmit={ onSubmitHandler }>
        <div className="checkout-form__movie">
          <label htmlFor="selectedMovie">{ props.selectedMovie.title }</label>
          <input type="hidden" name="selectedMovie" value={ props.selectedMovie } />
        </div>
        <div className="checkout-form__customer">
          <label htmlFor="selectedCustomer">{ props.selectedCustomer.name }</label>
          <input type="hidden" name="selectedCustomer" value={ props.selectedCustomer } />
        </div>
        <div className="checkout-form__submit">
          <input className= { `button button-large ${ visibility() }` }
            type="submit" name="submit" value="Check Out Now" />
        </div>
      </form>
    </section>
  )

}

CheckOutForm.propTypes = {
  selectedMovie: PropTypes.object,
  selectedCustomer: PropTypes.object,
  resetCheckOutFormCallback: PropTypes.func,
  renderAlertCallback: PropTypes.func
}

export default CheckOutForm;
