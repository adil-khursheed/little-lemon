import React from 'react'
import restaurant from './assets/restaurantfood.jpg';
import Header from './components/Header';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <section className='hero'>
          <div className='hero-section'>
            <div className='hero-text'>
              <h1>Little Lemon</h1>
              <h4>Chicago</h4>
              <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
              <button>Reserve a Table</button>
            </div>
            <div className='hero-image'>
              <img src={restaurant} alt='Restaurant Food' />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default HomePage;