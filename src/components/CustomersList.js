import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import './styles/CustomersList.css';

import CustomerCard from './CustomerCard';
import axios from 'axios';

const URL = 'https://rails-videostore-api.herokuapp.com/customers'

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
          <Table className="table-sm customer-table__table">
            <thead>
              <tr className="customer-table__header-row">
                <th scope="col">Name</th>
                <th scope="col">Acct Credit</th>
                <th scope="col">Tot Movies Checked Out</th>
                <th scope="col">Overdue</th>
                <th scope="col">+</th>
              </tr>
            </thead>
            <tbody>
             { allCustomers }
            </tbody>
          </Table>
         </div>
      )
    }

  componentDidMount() {
    this.mounted = true;
    axios.get(URL)
      .then((response) => {
        if(this.mounted){
          this.setState({ customers: response.data });
        }
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        });
      });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
}

CustomersList.propTypes = {
  selectCustomerCallback: PropTypes.func
}

export default CustomersList;
