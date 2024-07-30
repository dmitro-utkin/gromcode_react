import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import User from "./User.jsx";
import Home from "./Home.jsx";
import Users from "./Users.jsx";

const App = () => {
  return (
    <div className="page">
      <Router>
        <div className="page__content">
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users">Users</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/users" component={Users} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
