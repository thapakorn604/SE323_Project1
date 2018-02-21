import React, { Component } from 'react';
import bulma from '../node_modules/bulma/css/bulma.css';
import { NavLink } from 'react-router-dom';
import Login from './View/Login';

class App extends Component {

  render() {
    return (
      <div>
        <nav className="navbar is-success" role="navigation">
          <div className="container">
            <div className="navbar-brand">
              <NavLink exact to="/" className="navbar-item">
              <h1 className="has-text-weight-bold is-size-4">Registration System</h1>
              </NavLink>
            </div>
          </div>
        </nav>
      <Login />  
      </div>
    );
  }
}

export default App;
