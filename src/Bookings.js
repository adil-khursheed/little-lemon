import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import restaurant from './assets/restaurant.jpg';
import './Bookings.css';
import BookingForm from './components/BookingForm';

const Bookings = () => {
  return (
    <>
      <Header />
      <main className='booking__page'>
        <div className='restaurant__image'>
          <img src={restaurant} alt='Restaurant' />
        </div>
        <BookingForm />
      </main>
      <Footer />
    </>
  )
}

export default Bookings