import React from 'react'
import './BookingForm.css'

const BookingForm = () => {
  return (
    <>
        <div className='booking__title'>
          <h1>Reserve Your Table</h1>
        </div>
        <form>
            <div className='choose__date'>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" />
            </div>
            <div className='choose__time'>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
            </div>
            <div className='number__guests'>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" />
            </div>
            <div className='occasion'>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <input type="submit" className='submit__btn' value="Make Your reservation" />
        </form>
    </>
  )
}

export default BookingForm