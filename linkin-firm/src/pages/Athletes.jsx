import React from 'react';
import Header from '../components/Header';
import imgRunner from '../images/svg/athletes_page_img.svg';
import SimpleSlider from '../components/Carousel';
import '../styles/athletes.css';

const englishTexts = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat, lacus id consequat molestie, erat metus faucibus orci, non blandit lorem est et ipsum. Nam enim metus, bibendum in ipsum sit amet, aliquam mollis eros. Nam ac arcu dignissim, posuere mi id,',
  roleName1: 'Our Services',
  services: ['Agenciamento de atletas', 'Lifestyle Marketing', 'Promoção de Eventos', 'Assessoria de Imprensa'],
  roleName2: 'Our Atlhetes',
};
const portugueseTexts = {
  title: 'Atletas',
  subtitle: 'Ser atleta é ir muito além de uma vitória ou derrota.',
  roleName1: 'Nossos serviços',
  services: ['Agenciamento de atletas', 'Lifestyle Marketing', 'Promoção de Eventos', 'Assessoria de Imprensa'],
  roleName2: 'Nossos atletas',
};

function atlhetesSide(roleName1, roleName2, services) {
  return (
    <div>
      <p className="athlete-page-ath-title">{roleName1}</p>
      {cardServices(services)}
      <p className="athlete-page-ath-title">{roleName2}</p>
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

function cardServices(services) {
  return (
    <div className="services-card ">
      <span className="card-service scale-up-center">
        <p className="text-card">{services[0]}</p>
      </span>
      <span className="card-service scale-up-center">
        <p className="text-card">{services[1]}</p>
      </span>
      <span className="card-service scale-up-center">
        <p className="text-card">{services[2]}</p>
      </span>
      <span className="card-service scale-up-center">
        <p className="text-card">{services[3]}</p>
      </span>
    </div>
  )
}

function atlhetesContainer({ title, subtitle, roleName1, roleName2, services }) {
  return (
    <div className="athlete-page-container">
      {informationsSide(title, subtitle)}
      {atlhetesSide(roleName1, roleName2, services)}
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
