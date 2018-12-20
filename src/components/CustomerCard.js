import React from 'react';

import PropTypes from 'prop-types';
import './styles/CustomerCard.css';

// import Customer from './Customer';
import SelectButton from './SelectButton';

const CustomerCard = (props) => {

  const { customer } = props;

  return (
    <tr className="customer-table__table-row">
      <td>{customer.name}</td>
      <td>{customer.account_credit}</td>
      <td>{customer.movies_checked_out_count}</td>
      <td>#</td>
      <td>
        <SelectButton
          buttonType={ 'selectCustomer' }
          customer={ customer }
          selectCustomerCallback={ props.selectCustomerCallback }
        /></td>
    </tr>
  )
}

CustomerCard.propTypes = {
  customer: PropTypes.object.isRequired,
  selectCustomerCallback: PropTypes.func
};

export default CustomerCard;

// <Customer
//   accountCredit={customer.account_credit}
//   address={customer.address}
//   city={customer.city}
//   id={customer.id}
//   moviesCheckedOutCount={customer.movies_checked_out_count}
//   name={customer.name}
//   phone={customer.phone}
//   postalCode={customer.postal_code}
//   registeredAt={customer.registered_at}
//   state={customer.state}
// />
