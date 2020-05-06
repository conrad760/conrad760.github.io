import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import home from "./home";

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/">
        {home}
      </Route>
    </Router>
  );
};
export default App;
