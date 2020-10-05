import React from 'react';
import Header from '../components/Header';
import '../styles/ourClients.css';
import Retangle from '../images/svg/retangle.svg';
import ClientCard from '../images/svg/clients_logo.svg';

const englishText = {
  title: 'Lorem ipsum consectetur.',
  subtitle: 'Nam ac arcu dignissim, posuere mi id,',
  h1Name: 'Our Companies',
};

const portugueseText = {
  title: 'Lorem ipsum consectetur.',
  subtitle: 'Nam ac arcu dignissim, posuere mi id,',
  h1Name: 'Nossas empresas',
};

const card = (img, title, subtitle) => (
  <div className="our-client-card-box">
    <img src={img} alt="client logo" />
    <div className="our-clients-card-texts-container">
      <p className="our-clients-card-texts-title">{title}</p>
      <p className="our-clients-card-texts-subtitle">{subtitle}</p>
    </div>
  </div>
);

function clientsContainer(h1Name) {
  return (
    <div>
      <p className="our-clients-title">{h1Name}</p>
      <div className="our-clients-cards-container">
        {card(ClientCard, 'Lorem ipsum', 'Lorem ipsum tema for gertmun')}
        {card(ClientCard, 'Lorem ipsum', 'Lorem ipsum tema for gertmun')}
        {card(ClientCard, 'Lorem ipsum', 'Lorem ipsum tema for gertmun')}
        {card(ClientCard, 'Lorem ipsum', 'Lorem ipsum tema for gertmun')}
        {card(ClientCard, 'Lorem ipsum', 'Lorem ipsum tema for gertmun')}
        {card(ClientCard, 'Lorem ipsum', 'Lorem ipsum tema for gertmun')}
        {card(ClientCard, 'Lorem ipsum', 'Lorem ipsum tema for gertmun')}
        {card(ClientCard, 'Lorem ipsum', 'Lorem ipsum tema for gertmun')}
        {card(ClientCard, 'Lorem ipsum', 'Lorem ipsum tema for gertmun')}
        {card(ClientCard, 'Lorem ipsum', 'Lorem ipsum tema for gertmun')}
      </div>
    </div>
  );
}

function headerTexts(title, subtitle) {
  return (
    <div className="our-clients-header-texts">
      <p className="our-clients-header-title">{title}</p>
      <p className="our-clients-header-subtitle">{subtitle}</p>
      <img className="our-clients-header-img" src={Retangle} alt="principal" />
    </div>
  );
}

function ourClientsContainer({ title, subtitle, h1Name }) {
  return (
    <div className="our-clients-container">
      {headerTexts(title, subtitle)}
      {clientsContainer(h1Name)}
    </div>
  );
}

function OurClients() {
  const {
    location: { pathname },
  } = window;
  const namePages = pathname.includes('/en') ? englishText : portugueseText;
  return (
    <div>
      <Header />
      {ourClientsContainer(namePages)}
    </div>
  );
}

export default OurClients;
