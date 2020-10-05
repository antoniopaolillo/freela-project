import React from 'react';
import Header from '../components/Header'
import HomeInfo from '../components/HomeInfo';
import HomeFooter from '../components/HomeFooter';
import HomeCarousel from '../components/HomeCarousel';
import Paralax from '../components/Paralax';

function Home() {
  return (
    <div>
      <Header />
      <Paralax />
      <HomeInfo />
      <HomeCarousel />
      <HomeFooter />
    </div>
  );
}

export default Home;
