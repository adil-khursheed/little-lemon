import React from 'react';
import '../components/Footer.css';
import footerLogo from "../footer-logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='footer-section'>
        <div className='footer__logo'>
        <img src={footerLogo} alt='Little Lemon' />
        </div>
        <div className='doormat__navigation'>
          <h4>Doormat Navigation</h4>
          <ul className='footer__menu'>
            <li><Link to='/' className='footer__link'>Home</Link></li>
            <li><Link to='/about' className='footer__link'>About</Link></li>
            <li><Link to='/menu' className='footer__link'>Menu</Link></li>
            <li><Link to='/reservations' className='footer__link'>Reservations</Link></li>
            <li><Link to='/order' className='footer__link'>Order Online</Link></li>
            <li><Link to='/login' className='footer__link'>Login</Link></li>
          </ul>
        </div>
        <div className='contact'>
          <h4>Contact</h4>
          <address>
            <p>Chicago, Illinois, U.S.</p>
            <a href="mailto:service@littlelemon.com">service@littlelemon.com</a>
            <a href="tel:+13115552368">(311) 555-2368</a>
          </address>
        </div>
        <div className='social__media'>
          <h4>Follow us on:</h4>
          <ul className='social__links'>
            <li><a href='https://facebook.com' target='_blank' className='social__link'>Facebook</a></li>
            <li><a href='https://twitter.com' target='_blank' className='social__link'>Twitter</a></li>
            <li><a href='https://instagram.com' target='_blank' className='social__link'>Instagram</a></li>
            <li><a href='https://youtube.com' target='_blank' className='social__link'>Youtube</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer