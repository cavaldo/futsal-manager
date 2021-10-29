import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    return (
      <nav className="page-nav">
        <ul className="nav-links">
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/stats">
                <li>Stats</li>
            </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
  