import React from 'react'
import './BookingForm.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GuestErrorMessage = () => {
    return (
        <p className='field__error'>Number of Guest should not be more than 10</p>
    )
}

const BookingForm = (props) => {
    const [date, setDate] = useState("dd / mm / yyyy")
    const [time, setTime] = useState(
        props.availableTimes.map((times) => <option>{times}</option>)
    );
    const [guest, setGuest] = useState("")
    const [occasion, setOccasion] = useState("")

    function handleDate(e) {
        setDate(e.target.value);

        let stringify = e.target.value;
        const date = new Date(stringify);

        props.updateTimes(date);

        setTime(props.availableTimes.map((times) => <option>{times}</option>));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const navigate = useNavigate();
    const formSubmission = () => {
        if (props.submitForm) {
            navigate('/confirmation')
        } else {
            return false;
        }
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
                      onChange={handleDate}
                  />
            </div>
            <div className='choose__time'>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" required >
                    {time}
                </select>
            </div>
            <div className='number__guests'>
                <label htmlFor="guests">Number of guests</label>
                  <input
                      type="number"
                      placeholder="1"
                      min="1"
                      max="10"
                      id="guests"
                      value={guest.number}
                      onChange={(e) => {
                          setGuest(e.target.value)
                      }}
                  />
                  {guest.value > 10 ? (
                      <GuestErrorMessage />
                  ) : null}
            </div>
            <div className='occasion'>
                <label htmlFor="occasion">Occasion</label>
                  <select id="occasion" value={occasion} onChange={(e) => {
                      setOccasion(e.target.value)
                    }}
                  >
                    <option value="">Select Your Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>
            <button type='submit' className='submit__btn' onClick={formSubmission}>Make Your Reservation</button>
        </form>
    </>
  )
}

export default BookingForm