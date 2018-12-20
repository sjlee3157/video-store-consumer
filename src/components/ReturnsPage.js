import React from 'react';

import PropTypes from 'prop-types';
import './styles/ReturnsPage.css';

import RentalsList from './RentalsList';

const ReturnsPage = () => {
  return (
    <div className="returns">
      <h1>Rental Return</h1>
      <RentalsList />
    </div>
  )
}

ReturnsPage.propTypes = {
}

export default ReturnsPage;
