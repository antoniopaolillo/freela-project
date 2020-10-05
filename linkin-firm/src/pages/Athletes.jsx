import React from 'react';
import Header from '../components/Header';
import imgRunner from '../images/svg/athletes_page_img.svg';
import SimpleSlider from '../components/Carousel';
import '../styles/athletes.css';

const englishTexts = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat, lacus id consequat molestie, erat metus faucibus orci, non blandit lorem est et ipsum. Nam enim metus, bibendum in ipsum sit amet, aliquam mollis eros. Nam ac arcu dignissim, posuere mi id,',
  roleName: 'Our Atlhetes',
};
const portugueseTexts = {
  title: 'Atletas',
  subtitle:
    'Ser atleta é ir muito além de uma vitória ou derrota.',
  roleName: 'Nossos atletas',
};

function atlhetesSide(roleName) {
  return (
    <div>
      <p className="athlete-page-ath-title">{roleName}</p>
      <div className="athlete-card-box-container-outside">
        <SimpleSlider />
      </div>
    </div>
  );
}

function informationsSide(title, subtitle) {
  return (
    <div className="athlete-page-inf-right">
      <p className="athlete-page-title">{title}</p>
      <p className="athlete-page-subtitle">{subtitle}</p>
      <img src={imgRunner} alt="example" />
    </div>
  );
}

function atlhetesContainer({ title, subtitle, roleName }) {
  return (
    <div className="athlete-page-container">
      {informationsSide(title, subtitle)}
      {atlhetesSide(roleName)}
    </div>
  );
}

function Athletes() {
  const {
    location: { pathname },
  } = window;
  const namePages = pathname.includes('/en') ? englishTexts : portugueseTexts;
  return (
    <div className="athletes-container-outside-mob">
      <Header />
      {atlhetesContainer(namePages)}
    </div>
  );
}

export default Athletes;
