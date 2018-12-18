import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/CustomersList.css';

import CustomerCard from './CustomerCard';
import axios from 'axios';


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
            <CustomerCard
              key={ i }
              customer={ customer }
              selectCustomerCallback={ this.props.selectCustomerCallback }
            />
          )
        })
      return (
        <div>
          <ul>
           { allCustomers }
          </ul>
         </div>
      )
    }

  componentDidMount() {
    axios.get(URL)
      .then((response) => {
        const customerSet = response.data.map((customer) => {
          const newCustomer = { ...customer };
          return newCustomer;
        })

        this.setState({ customers: customerSet });

      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        });
      });
  }
}

CustomersList.propTypes = {
  selectCustomerCallback: PropTypes.func
}

export default CustomersList;
