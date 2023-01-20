import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Header.css'

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Budgeting and Expense tracker</h1>
          <div className='header-button'>
            <Link to='/'>
              <button className='button-59'>Home</button>
            </Link>
            <Link to='/add-expense'>
              <button className='button-59'>Add Expense</button>
            </Link>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;