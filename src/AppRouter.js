import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "./components/HomePage"
import SearchPage from "./components/SearchPage"
import LibraryPage from "./components/LibraryPage"
import CustomersPage from "./components/CustomersPage"

import SearchBar from "./components/SearchBar"
import CheckOut from './components/CheckOut'

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search/">Search Movies</Link>
          </li>
          <li>
            <Link to="/library/">Movie Library</Link>
          </li>
          <li>
            <Link to="/customers/">Customers</Link>
          </li>
          <li>
            <SearchBar />
          </li>
          <li>
            <CheckOut />
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={HomePage} />
      <Route path="/search/" component={SearchPage} />
      <Route path="/library/" component={LibraryPage} />
      <Route path="/customers/" component={CustomersPage} />
    </div>
  </Router>
);

export default AppRouter;
