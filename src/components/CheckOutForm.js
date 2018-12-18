import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import PropTypes from 'prop-types';
import './styles/CheckOutForm.css';


class CheckOutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMovie: {},
      selectedCustomer: {}
    }
  }

  onSubmitHandler = (e) => {
    e.preventDefault();

    if (this.state.selectedMovie !== {} && this.state.selectedCustomer !== {}) {
      this.rentMovie();
      this.resetState();
    } else {
      console.log('did not submit. both fields must be filled out');
    }
  }

  rentMovie = () => {
    console.log('renting movie (POST request) (currently non-func)');

    // SJL: Defaulting due date to 7 days from today
    const dueDate = moment().add(7, 'days').format("MMM DD YYYY");
    const { selectedMovie, selectedCustomer } = this.state;
    const title = selectedMovie.title
    const params = {
      customer_id: selectedCustomer.id,
      due_date: dueDate
    }

    console.log('params');
    console.log(params)

    const checkOutUrl = `http://localhost:3000/rentals/${title}/check-out`

    axios.post(checkOutUrl, params)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  resetState = () => {
    this.setState({
      selectedMovie: {},
      selectedCustomer: {}
    })
  }

  render() {
    console.log('rendering checkout form')
    return (
      <section>
        <form onSubmit={ this.onSubmitHandler }>
          <label htmlFor="selectedMovie">{ this.state.selectedMovie.title }</label>
            <input type="hidden" name="selectedMovie" value={ this.state.selectedMovie } />
          <label htmlFor="selectedCustomer">{ this.state.selectedCustomer.name }</label>
            <input type="hidden" name="selectedCustomer" value={ this.state.selectedCustomer } />
          <input type="submit" name="submit" value="Check Out This Movie" />
        </form>
      </section>
    )
  }

  componentDidUpdate(prevProps) {
    console.log('updating check out form');
    const selectedMovie = this.props.selectedMovie;
    const selectedCustomer = this.props.selectedCustomer;
    if (selectedMovie !== prevProps.selectedMovie) {
      console.log(selectedMovie);
      this.setState( { selectedMovie });
    }
    if (selectedCustomer !== prevProps.selectedCustomer) {
      this.setState( { selectedCustomer });
    }
  }
}

CheckOutForm.propTypes = {
  selectedMovie: PropTypes.object,
  selectedCustomer: PropTypes.object
}

export default CheckOutForm;
