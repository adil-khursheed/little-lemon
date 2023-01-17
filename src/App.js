import './App.css';
import HomePage from './HomePage';
import About from './About';
import Menu from './Menu';
import Bookings from './Bookings';
import OnlineOrder from './OnlineOrder';
import Login from './Login';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservations' element={<Bookings />} />
        <Route path='/order' element={<OnlineOrder />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
