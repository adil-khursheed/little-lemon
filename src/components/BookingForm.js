import React from 'react'
import './BookingForm.css'
import { useState, useEffect } from 'react';

const GuestErrorMessage = () => {
    return (
        <p className='field__error'>Number of Guest should not be more than 10</p>
    )
}

const BookingForm = () => {
    const [date, setDate] = useState("")
    const [availableTimes, setAvailableTimes] = useState("")
    const [guest, setGuest] = useState("")
    const [occasion, setOccasion] = useState("")

    const getIsFormValid = () => {
        return (
            date &&
            availableTimes !== "Choose Your Time" &&
            guest.value <= 10 &&
            occasion !== "Select Your Occasion"
        )
    }

    const clearForm = () => {
        setDate("");
        setAvailableTimes("Choose Your Time");
        setGuest("");
        setOccasion("Select Your Occasion")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
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
                      onChange={(e) => {
                          setDate(e.target.value);
                      }}
                  />
            </div>
            <div className='choose__time'>
                <label htmlFor="res-time">Choose time</label>
                  <select id="res-time" value={availableTimes} onChange={(e) => {
                      setAvailableTimes(e.target.value)
                    }}
                  >
                    <option value="">Choose Your Time</option>
                    <option value='17:00'>17:00</option>
                    <option value='18:00'>18:00</option>
                    <option value='19:00'>19:00</option>
                    <option value='20:00'>20:00</option>
                    <option value="21:00">21:00</option>
                    <option value='22:00'>22:00</option>
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
                      value={guest.value}
                      onChange={(e) => {
                          setGuest({...guest, value: e.target.value})
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
            <input type="submit" className='submit__btn' value="Make Your reservation" disabled={!getIsFormValid()} />
        </form>
    </>
  )
}

export default BookingForm