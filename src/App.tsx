import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import icon from '../assets/bitcoin.png';
import './App.global.css';
import Button from 'react-bootstrap/Button';
import Authenticate from "./Authenticate";

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1 className="main-title">Welcome to Crypto Bidder</h1>
      <div className="Hello">
        <div className={"main-button"}>
        <Link to="/autenticate">
          <Button>
            Authenticate
          </Button>
        </Link>
        </div>
        <div className={"main-button"}>
        <Link to="/faq">
          <Button variant="light">
            FAQ
          </Button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/autenticate">
          <Authenticate />
        </Route>
        <Route path="/faq" component={Hello} />
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
