import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ConfirmedBooking.css'

const ConfirmedBooking = () => {

  const navigate = useNavigate()

  function handleHome() {
    navigate('/')
  }

  function handleOrder() {
    navigate('/order')
  }

  return (
    <>
      <main className='confirmation__page'>
        <h2 className='confirmation__title'>Thank you for dining with us</h2>
        <p className='confirmation__desc'>Your reservation has been completed successfully. You will recieve a confirmation email shortly.</p>
        <div className='confirmation__page__btn'>
          <button onClick={handleHome}>Go to Home</button>
          <button onClick={handleOrder}>Order Online</button>
        </div>
      </main>
    </>
  )
}

export default ConfirmedBooking