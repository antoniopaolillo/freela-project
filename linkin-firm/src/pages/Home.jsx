import React from 'react';
import Header from '../components/Header'
import HomeInfo from '../components/HomeInfo';
import HomeFooter from '../components/HomeFooter';
import HomeCarousel from '../components/HomeCarousel';

function Home() {
  return (
    <div>
      <Header />
      <HomeInfo />
      <HomeFooter />
      <HomeCarousel />
    </div>
  );
}

export default Home;
