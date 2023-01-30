import React from 'react'
import './BookingForm.css'
import { useState, useEffect } from 'react';

const GuestErrorMessage = () => {
    return (
        <p className='field__error'>Number of Guest can not be more than 10</p>
    )
}

const BookingForm = ({ availableTimes, setAvailableTimes, submitForm }) => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("");

    function isValidDate(dateString) {
        const ds = dateString.split("-");
        const dateObj = new Date(parseInt(ds[0]), parseInt(ds[1]) - 1, parseInt(ds[2]));
        return dateObj > new Date();
    }

    function getDateObject (dateString) {
        const ds = dateString.split("-");
        return new Date(parseInt(ds[0]), parseInt(ds[1]) - 1, parseInt(ds[2]));
    }

    function handleDateChange(e) {
        if (!isValidDate(e.target.value)) {
            alert(`Sorry! Reservations not available for this date!`);
            return;
        }
        const dateObject = getDateObject(e.target.value);
        setDate(e.target.value);
        setAvailableTimes({ setBookingDate: dateObject });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const reservation = {
            date: date,
            time: time,
            guests: guests,
            occasion: occasion
        }
        submitForm(reservation);
    }

  return (
    <>
        <div className='booking__title'>
          <h1>Reserve Your Table</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='choose__date'>
                <label htmlFor="res-date">Choose date</label>
                  <input
                      type="date"
                      id="res-date"
                      value={date}
                      onChange={handleDateChange}
                      required
                  />
            </div>
            <div className='choose__time'>
                <label htmlFor="res-time">Choose time</label>
                <select name='time' value={time} onChange={(e) => setTime(e.target.value)} required>
                    {
                        availableTimes.times.map((time, index) => {
                            return <option value={time} key={index}>{ time }</option>
                        })
                    }
                </select>
            </div>
            <div className='number__guests'>
                <label htmlFor="guests">Number of guests</label>
                  <input
                      type="number"
                      min="1"
                      max="10"
                      id="guests"
                      value={guests}
                      onChange={(e)=>setGuests(e.target.value)}
                      required
                  />
                  {guests.valueOf() > 10 ? (
                      <GuestErrorMessage />
                  ) : null}
            </div>
            <div className='occasion'>
                <label htmlFor="occasion">Occasion</label>
                  <select
                      id="occasion"
                      value={occasion}
                      onChange={(e) => { setOccasion(e.target.value) }}
                      required
                  >
                    <option value="">Select Your Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>
            <button type='submit' className='submit__btn'>Make Your Reservation</button>
        </form>
    </>
  )
}

export default BookingForm