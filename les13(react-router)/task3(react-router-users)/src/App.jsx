import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import Users from "./Users.jsx";
import User from "./User.jsx";

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
            {/* Додамо маршрут для компоненти Home на корневому шляху */}
            <Route exact path="/" component={Home} />
            {/* Додамо маршрут для компоненти Users на шляху /users */}
            <Route exact path="/users" component={Users} />
            {/* Змінимо шлях маршруту для компоненти User на /users/:userId */}
            <Route path="/users/:userId" component={User} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
