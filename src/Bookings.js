import React, { useReducer } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import restaurant from './assets/restaurant.jpg';
import './Bookings.css';
import BookingForm from './components/BookingForm';
import { fetchAPI, submitAPI } from './api';

const Bookings = () => {

  function updateTimes(date) {
    return (
        fetchAPI(date)
    );
}
function submitForm(formData) {
    submitAPI(formData)
}

const output = fetchAPI(new Date());

const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Header />
      <main className='booking__page'>
        <div className='restaurant__image'>
          <img src={restaurant} alt='Restaurant' />
        </div>
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitForm} />
      </main>
      <Footer />
    </>
  )
}

export default Bookings