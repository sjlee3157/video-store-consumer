import React, { Component } from 'react';
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
    // POST /rentals/:title/check-out
    // params: customer_id, due_date

    // SJL: What's the due_date? I defaulted to 7 days from today

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
