import React from 'react'
import {FaBolt} from 'react-icons/fa';

const Header = () => {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className='container'>
        <a className='navbar-brand' href="/">
          <div className="d-flex">
            <FaBolt className='text-danger' size='3em' />
            <p>Study Buddy</p>
          </div>
        </a>
      </div>
    </nav>
  )
};

export default Header