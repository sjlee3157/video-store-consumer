import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LibraryPage from "./components/LibraryPage"
import HomePage from "./components/HomePage"
import CustomersPage from "./component/CustomersPage"
import SearchBar from "./component/SearchBar"

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
        </ul>
      </nav>

      <Route path="/" exact component={HomePage} />
      <Route path="/search/" component={SearchBar} />
      <Route path="/library/" component={LibraryPage} />
      <Route path="/customers/" component={CustomersPage} />
    </div>
  </Router>
);

export default AppRouter;
