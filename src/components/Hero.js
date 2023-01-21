import React from 'react'
import { useNavigate } from 'react-router-dom';
import restaurant from '../assets/restaurantfood.jpg';
import './Hero.css';

const Hero = () => {

    const navigate = useNavigate();

  return (
      <>
            {/* HERO SECTION STARTS */}
            <section className='hero'>
                <div className='hero-section'>
                <div className='hero-text'>
                    <h1>Little Lemon</h1>
                    <h4>Chicago</h4>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button onClick={() => navigate('/reservations')}>Reserve a Table</button>
                </div>
                <div className='hero-image'>
                    <img src={restaurant} alt='Restaurant Food' />
                </div>
                </div>
            </section>
            {/* HERO SECTION ENDS */}
      </>
  )
}

export default Hero