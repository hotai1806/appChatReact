import React from 'react';
import {Chat , Join} from './components';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return(
  <Router>
    <Route path="/" exact component={Join} ></Route>
    <Route path="/chat" component={Chat}></Route>
  </Router>
  );
}

export default App;
