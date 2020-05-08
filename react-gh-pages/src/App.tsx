import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import home from "./pages/home";
import calendar from "./pages/calendar";
import Navigation from "./components/Navigation";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <div>
          <Navigation />
        </div>
        <Switch>
          <Route exact path="/">
            {home}
          </Route>
          <Route exact path="/">
            {calendar}
          </Route>
        </Switch>
        <footer>
          <ul>
            <li>
              <i></i>
              <a href="mailto:conradlparker@gmail.com"> email</a>
            </li>
            <li>
              <i></i>
              <a href="https://github.com/conrad760"> github.com/conrad760</a>
            </li>
            <li>
              <i></i>
              <a href="./conradlparker.pgp"> PGP</a>
            </li>
          </ul>
        </footer>
      </Router>
    </div>
  );
};
export default App;
