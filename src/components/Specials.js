import React from 'react';
import { useNavigate } from 'react-router-dom';
import GreekSalad from '../assets/greek-salad.jpg';
import LemonDessert from '../assets/lemon-dessert.jpg';
import Bruchetta from '../assets/bruchetta.svg';
import { FaBiking } from "react-icons/fa";
import './Specials.css';


const specialMenus = [
  {
      id: 1,
      image: GreekSalad,
      title: 'Greek Salad',
      price: '$12.99',
      desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
  {
      id: 2,
      image: Bruchetta,
      title: 'Bruchetta',
      price: '$5.99',
      desc: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    },
  {
      id: 3,
      image: LemonDessert,
      title: 'Lemon Dessert',
      price: '$5.00',
      desc: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
    }
]
  
const Specials = () => {
    const navigate = useNavigate();
  return (
      <>
          {/* SPECIALS SECTION STARTS */}
        <section className='specials'>
          <div className='specials__title'>
            <h2>This weeks specials!</h2>
            <button onClick={() => navigate('/menu')}>Online Menu</button>
          </div>
          <div className='specials__menu'>
            {specialMenus.map((specialMenu) => {
              return (
                <div className='specials__dish' key={specialMenu.id}>
                  <div className='dish__image'>
                    <img src={specialMenu.image} />
                  </div>
                  <div className='dish__title'>
                    <h4>{specialMenu.title}</h4>
                    <p>{specialMenu.price}</p>
                  </div>
                  <div className='dish__description'>
                    <p>{specialMenu.desc}</p>
                  </div>
                  <div className='delivery__btn'>
                    <a href='#'>Order a Delivery</a>
                    <FaBiking />
                  </div>
                </div>
              )
            })}
          </div>
        </section>
        {/* SPECIALS SECTION ENDS */}
      </>
  )
}

export default Specials