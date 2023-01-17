import React from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='header'>
        <img src={logo} alt='Little Lemon' className='w-4xl' />
        <nav>
          <ul className='navbar'>
            <li><Link to='/' className='menu-link'>Home</Link></li>
            <li><Link to='/about' className='menu-link'>About</Link></li>
            <li><Link to='/menu' className='menu-link'>Menu</Link></li>
            <li><Link to='/reservations' className='menu-link'>Reservations</Link></li>
            <li><Link to='/order' className='menu-link'>Order Online</Link></li>
            <li><Link to='/login' className='menu-link'>Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header