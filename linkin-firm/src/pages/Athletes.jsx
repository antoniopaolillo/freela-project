import React from 'react';
import Header from '../components/Header';
import IMG1 from '../images/svg/img_1_athletes.svg';
import IMG2 from '../images/svg/img_2_athletes.svg';
import SimpleSlider from '../components/Carousel';
import '../styles/athletes.css';

const englishTexts = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat, lacus id consequat molestie, erat metus faucibus orci, non blandit lorem est et ipsum. Nam enim metus, bibendum in ipsum sit amet, aliquam mollis eros. Nam ac arcu dignissim, posuere mi id,',
  roleName: 'Our Atlhetes',
};
const portugueseTexts = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat, lacus id consequat molestie, erat metus faucibus orci, non blandit lorem est et ipsum. Nam enim metus, bibendum in ipsum sit amet, aliquam mollis eros. Nam ac arcu dignissim, posuere mi id,',
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
    <div className="athlete-page-information-side">
      <div className="athlete-page-inf-img1-container">
        <img src={IMG2} alt="example" />
      </div>
      <div className="athlete-page-inf-right">
        <p className="athlete-page-title">{title}</p>
        <p className="athlete-page-subtitle">{subtitle}</p>
        <img src={IMG1} alt="example" />
      </div>
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
    <div>
      <Header />
      {atlhetesContainer(namePages)}
    </div>
  );
}

export default Athletes;
