import React from 'react';

import PropTypes from 'prop-types';
import './styles/ReturnsPage.css';

import ReturnRentalsSearchBar from './ReturnRentalsSearchBar';
import RentalsList from './RentalsList';

const ReturnsPage = () => {
  return (
    <div>
      <h1>Rental Return</h1>
      <ReturnRentalsSearchBar />
      <RentalsList />
    </div>
  )
}

ReturnsPage.propTypes = {
}

export default ReturnsPage;
