import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './styles/RentalsList.css';

import SelectButton from './SelectButton';
import axios from 'axios';

class RentalsList extends Component {
  constructor() {
    super();

    this.state = {
      overdue: [],
      outOk: [],
      returned: [],
      masterOverdue: [],
      masterOutOk: [],
      masterReturned: []
    }
  }

  checkIn = (rental) => {
    // POST /rentals/:title/return
    // Params: { customer_id: customer_id }
    const { title, customer_id, name } = rental;
    const checkInUrl = `http://localhost:3000/rentals/${ title }/return`;
    const params = { customer_id };
    axios.post(checkInUrl, params)
      .then((response) => {
          console.log(response);
          console.log(`Succesfully checked in ${ title }`)
        })
      .catch((error) => {
        console.log(error.message);
        this.setState({ errorMessage: error.message });
      });
  }

  checkInButton = (rental) => {
    return (
      <SelectButton
      buttonType={ 'selectRental' }
      rental={ rental }
      checkInCallback={ this.checkIn } />
    )
  }

  getRentals = (rentalType) => {
    const rentals = this.state[rentalType]
      .reverse()
      .map((rental, i) => {
        const dueDate = moment(rental.due_date).format('MMM Do, YYYY');
        const checkoutDate = moment(rental.checkout_date).format('MMM Do, YYYY');
        return (
          <div className={ `returns__${rentalType}-row` } key={ i }>
            { rentalType !== 'returned' && this.checkInButton(rental) }
            <div className={ `returns__${rentalType}-rental` }>
              <p>Title: { rental.title }</p>
              <p>Name: { rental.name }</p>
              <p>Checked Out: { checkoutDate }</p>
              <p>Due: { dueDate }</p>
            </div>
          </div>
        )
    });
    return rentals
  }

  render() {
      return (
        <div>
          <h2>Overdue</h2>
            { this.getRentals('overdue') }
          <h2>Checked Out</h2>
            { this.getRentals('outOk') }
          <h3>Returned</h3>
            { this.getRentals('returned') }
        </div>
      )
    }

  componentDidMount() {
    console.log('mounting rentals')
    // All rentals = rentals/overdue + rentals/out-ok + rentals/returned
    // Overdue:
    axios.get('http://localhost:3000/rentals/overdue')
      .then((response) => {
        const overdue = response.data.map((rental) => {
          const newRental = { ...rental };
          return newRental;
        })
        this.setState({
          overdue,
          masterOverdue: overdue
        });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({ errorMessage: error.message });
      });
    // Out-Ok:
    axios.get('http://localhost:3000/rentals/out-ok')
      .then((response) => {
        const outOk = response.data.map((rental) => {
          const newRental = { ...rental };
          return newRental;
        })
        this.setState({
          outOk,
          masterOutOk: outOk
        });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({ errorMessage: error.message });
      });
    // Returned:
    axios.get('http://localhost:3000/rentals/returned')
      .then((response) => {
        const returned = response.data.map((rental) => {
          const newRental = { ...rental };
          return newRental;
        })
        this.setState({
          returned,
          masterReturned: returned
        });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({ errorMessage: error.message });
      });
  }
}

RentalsList.propTypes = {
}

export default RentalsList;
