import './App.css';
import HomePage from './HomePage';
import About from './About';
import Menu from './Menu';
import Bookings from './Bookings';
import OnlineOrder from './OnlineOrder';
import Login from './Login';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useReducer } from 'react';
import ConfirmedBooking from './components/ConfirmedBooking';
import { fetchAPI, submitAPI } from './api';


function App() {

  function initializeTimes() {
    return {
      times: [...fetchAPI(new Date())],
    };
  }

  function reducer(state, action) {
    const newBookingDate = action.setBookingDate;
    const newTimes = fetchAPI(newBookingDate);
    return { times: [...newTimes] };
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmation')
    }
  }

  const initialState = initializeTimes();
  const [availableTimes, setAvailableTimes] = useReducer(reducer, initialState);

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservations' element={<Bookings availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm} />} />
        <Route path='/confirmation' element={<ConfirmedBooking />} />
        <Route path='/order' element={<OnlineOrder />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
