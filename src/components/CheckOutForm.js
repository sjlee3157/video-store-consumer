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
      due_date: dueDate
    }

    const checkOutUrl = `http://localhost:3000/rentals/${title}/check-out`

    axios.post(checkOutUrl, params)
    // console.log(renderAlertCallback)
      .then((response) => {
        // renderAlertCallback({"success":`A copy of ${selectedMovie.title}
        // has been checked-out to ${selectedCustomer.name}.`})
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
        // props.renderAlertCallback({"error":`This rental could not be created`})
      })
  }

  return (
    <section>
      <form onSubmit={ onSubmitHandler }>
        <label htmlFor="selectedMovie">{ props.selectedMovie.title }</label>
        <input type="hidden" name="selectedMovie" value={ props.selectedMovie } />

        <label htmlFor="selectedCustomer">{ props.selectedCustomer.name }</label>
        <input type="hidden" name="selectedCustomer" value={ props.selectedCustomer } />

        <input type="submit" name="submit" value="Check Out This Movie" />
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
