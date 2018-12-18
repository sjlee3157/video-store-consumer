import React from 'react';
import PropTypes from 'prop-types';
import './styles/Customer.css';


const Customer = (props) => {

  return (
    <li>
      <h3>{props.name}</h3>
      <p>{props.address}, {props.city} {props.state}</p>
      <p>{props.phone}</p>
      <p>Account Credit: {props.accountCredit}</p>
      <p> Movies checked out: {props.moviesCheckedOutCount}</p>
    </li>
  )
}

Customer.propTypes = {
  id: PropTypes.number,
  accountCredit: PropTypes.number,
  address: PropTypes.string,
  city: PropTypes.string,
  moviesCheckedOutCount: PropTypes.number,
  name: PropTypes.string,
  phone: PropTypes.string,
  postalCode: PropTypes.string,
  registeredAt: PropTypes.string,
  state: PropTypes.string,
};

export default Customer;
