import React from "react";
import { Home } from "./Components/Home";
import { MovieOverView } from "./Components/MovieOverView";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movieoverview" component={MovieOverView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
