import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import { Homepage } from "./components/Homepage/Homepage";
import { Login } from './container/Account/Login/Login';
import { Register } from './container/Account/Register/Register';
const App = () => (
  <div className="app">
      <Router>
        <Switch>
          <Route exact path="/"><Homepage /></Route>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/register"><Register /></Route>
        </Switch>
      </Router>
  </div>
);

export default App;