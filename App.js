import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Containers/Login/index.js'
import SignIn from './Containers/SignIn/index.js'

class App extends Component {
  render(){
  return (
    <Router> 
    <div className="App">
    <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/login'} className="nav-link">Login</Link></li>
            <li><Link to={'/signIn'} className="nav-link">SignIn</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              
              <Route path='/login' component={Login} />
              <Route path='/signIn' component={SignIn} />
          </Switch>
    </div>
    </Router>
  );
  }
}

export default App;
