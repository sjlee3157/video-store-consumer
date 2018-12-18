import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/CustomersList.css';
import axios from 'axios';
import Customer from './Customer'


const URL = 'http://localhost:3000/customers/'


class CustomersList extends Component {
  constructor() {
    super();

    this.state = {
      customers: []
    }
  }

  render() {
      console.log("Rendered Customers:", this.state.customers)
      const allCustomers = this.state.customers
        .map((customer, i) => {
          return (
            <Customer
              key={i}
              accountCredit={customer.account_credit}
              address={customer.address}
              city={customer.city}
              id={customer.id}
              moviesCheckedOutCount={customer.movies_checked_out_count}
              name={customer.name}
              phone={customer.phone}
              postalCode={customer.postal_code}
              registeredAt={customer.registered_at}
              state={customer.state}
            />
          )
        })
      return (
        <div>
          <ul>
           {allCustomers}
          </ul>
         </div>
      )
    }

  componentDidMount() {
    axios.get(URL)
      .then((response) => {
        console.log(response)
        const customerSet = response.data.map((customer) => {
          console.log(customer)
          const newCustomer = {
            ...customer,
          };
          console.log(newCustomer)
          return newCustomer;
        })

        this.setState({
          customers: customerSet
        });

      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        });
      });
  }

}

export default CustomersList;
