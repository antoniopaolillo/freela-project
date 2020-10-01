import React from 'react';
import Header from '../components/Header';
import IMG1 from '../images/svg/img_1_athletes.svg';
import IMG2 from '../images/svg/img_2_athletes.svg';
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

function athletesCardsContainer() {
  return <div>card</div>;
}

function atlhetesSide(roleName) {
  return (
    <div>
      <p>{roleName}</p>
      {athletesCardsContainer()}
    </div>
  );
}

function informationsSide(title, subtitle) {
  return (
    <div>
      <div>
        <img src={IMG1} alt="example" />
      </div>
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
        <img src={IMG2} alt="example" />
      </div>
    </div>
  );
}

function atlhetesContainer({ title, subtitle, roleName }) {
  return (
    <div className="">
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
