import React from 'react'
import {FaBolt} from 'react-icons/fa';
import Timer from '../Timer/Timer';

import './header.css';

const Header = () => {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className='container'>
        <a className='navbar-brand' href="/">
          <div className="header">
            <h2>Study Buddy</h2>
            <FaBolt className='text-danger' size='2em' />
          </div>
        </a>

        <Timer />
      </div>
    </nav>
  )
};

export default Header