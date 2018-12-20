import React, { Component } from 'react';

import PropTypes from 'prop-types';
import './styles/ReturnsPage.css';

import RentalsList from './RentalsList';

class ReturnsPage extends Component {
  constructor() {
    super();

    this.state = {
      toggleRefresh: true
    }
  }

  refresh = () => {
    this.setState({
      toggleRefresh: !this.state.toggleRefresh
    })
  }

  render() {
    return (
      <div className="returns">
        <h1>Rental Return</h1>
        <RentalsList
          refreshCallback={ this.refresh }/>
      </div>
    )
  }
}

ReturnsPage.propTypes = {
}

export default ReturnsPage;
