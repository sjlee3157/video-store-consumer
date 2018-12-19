import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import HomePage from "./components/HomePage"
import SearchPage from "./components/SearchPage"
import LibraryPage from "./components/LibraryPage"
import CustomersPage from "./components/CustomersPage"

import SearchBar from "./components/SearchBar"
import CheckOutForm from './components/CheckOutForm'

import './AppRouter.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);




class AppRouter extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
      selectedMovie: {},
      selectedCustomer: {},
      alert: ''
    }
  }

  searchTerm = async (query) => {
    console.log('callback');
    console.log(query);
    const callbackPath = '/search'
    this.setState({ query })
    return callbackPath
  }

  selectMovie = (selectedMovie) => {
    this.setState({ selectedMovie })
  }

  selectCustomer = (selectedCustomer) => {
    this.setState({ selectedCustomer })
  }

  renderAlert = (message) => {
    this.setState({alert: message})
  }

  resetCheckOutForm = () => {
    this.setState({
      selectedMovie: {},
      selectedCustomer: {}
    })
    console.log('reset checkout form')
    console.log(this.state.selectedMovie)
  }

  render() {
    const page = (
        <section>
          <Route path="/" exact component={ HomePage } />
          <Route path="/search/" component={ props =>
              <SearchPage { ...props }
                query= { this.state.query }
                renderAlertCallback= { this.renderAlert }
              />
          } />
          <Route path="/library/" component={ props =>
            <LibraryPage { ...props }
              selectMovieCallback={ this.selectMovie }
            />
          } />
          <Route path="/customers/" component={ props =>
            <CustomersPage { ...props }
              selectCustomerCallback={ this.selectCustomer }
            />
          } />
        </section>
    )

    return (
      <Router>
        <div className="router">
          <nav className="router__nav">
            <ul className="router__nav-list">
              <div className="router__nav-navlinks">
                <li>
                  <h4><NavLink to="/">Home</NavLink></h4>
                </li>
                <li>
                  <h4><NavLink to="/library/">Our Movie Store</NavLink></h4>
                </li>
                <li>
                  <h4><NavLink to="/customers/">Customers</NavLink></h4>
                </li>
                <li>
                  <h4><SearchBar searchTermCallback={ this.searchTerm } /></h4>
                </li>
              </div>
              <div className="router__nav-checkout">
                <li>
                  <CheckOutForm
                    selectedMovie={ this.state.selectedMovie }
                    selectedCustomer={ this.state.selectedCustomer }
                    resetCheckOutFormCallback={ this.resetCheckOutForm }
                  />
                </li>
              </div>
              <div className="router__nav-alerts">
                <li>
                  Placeholder Text for Alerts
                  { this.state.alert }
                </li>
              </div>
            </ul>
          </nav>

          { page }

        </div>
      </Router>
    )
  }
}

export default AppRouter;
