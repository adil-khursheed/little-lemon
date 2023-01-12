import React from 'react'
import logo from './logo.png'
import Nav from './Nav'

const Header = () => {
  return (
      <header>
          <img src={logo} alt='Little Lemon' />
          <Nav />
      </header>
  )
}

export default Header