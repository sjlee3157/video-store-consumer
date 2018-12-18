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
    console.log('submitting checkout form (nonfunctional atm)')
    e.preventDefault();
    // TODO
    // Make sure user can't hit 'enter' to submit invalid form
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
        <form>
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
