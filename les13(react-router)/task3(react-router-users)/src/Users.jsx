import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import User from "./User.jsx";

function Users({ match }) {
  return (
    <div>
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.url}/github`}>Github</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${match.url}/facebook`}>Facebook</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:userId`} component={User} />
        <Route exact path={match.path}>
          <span>Select a user please</span>
        </Route>
      </Switch>
    </div>
  );
}

export default Users;
