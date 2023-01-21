import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Specials from './components/Specials';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specials />
      </main>
      <Footer />
    </>
  )
}

export default HomePage;