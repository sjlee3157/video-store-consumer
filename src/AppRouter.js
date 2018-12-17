import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => <h2>Home</h2>;
const Search = () => <h2>Search Movies</h2>;
const Library = () => <h2>Movie Library</h2>;
const Customers = () => <h2>Customers</h2>;

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

      <Route path="/" exact component={Home} />
      <Route path="/search/" component={Search} />
      <Route path="/library/" component={Library} />
      <Route path="/customers/" component={Customers} />
    </div>
  </Router>
);

export default AppRouter;
