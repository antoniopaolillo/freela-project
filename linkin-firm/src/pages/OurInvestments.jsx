import React from 'react';
import Header from '../components/Header';
import IMG from '../images/png/our-investments-img.png';
import '../styles/ourInvestments.css';
import CardImg from '../images/svg/card_img.svg';

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

const arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  29,
];

function textsContainer(title, subtitle) {
  return (
    <div className="our-investments-texts-side">
      <p className="our-investments-texts-title">{title}</p>
      <p className="our-investments-texts-subtitle">{subtitle}</p>
    </div>
  );
}

function imgContainer() {
  return (
    <div className="our-investments-img-side">
      <img src={IMG} alt="right side from page" />
    </div>
  );
}

function apresentationSide(title, subtitle) {
  return (
    <div className="our-investments-apresentation-container">
      {textsContainer(title, subtitle)}
      {imgContainer()}
    </div>
  );
}

function companiesCards() {
  return arr.map(element => (
    <div className="our-investments-companies-card">
      <img src={CardImg} alt="companie logo" />
      <div className="companie-card-texts">
        <p className="companie-card-title">Lorem ipsum</p>
        <p className="companie-card-subtitle">Lorem ipsum tema for gertmun</p>
      </div>
    </div>
  ));
}

function companiesSide(name) {
  return (
    <div className="our-investments-companies-side">
      <p className="our-investments-companies-side-title">{name}</p>
      <div className="companies-cards-container">{companiesCards()}</div>
    </div>
  );
}

function ourInvestmentsContainer({ title, subtitle, h1Name }) {
  return (
    <div className="our-investments-container">
      {apresentationSide(title, subtitle)}
      {companiesSide(h1Name)}
    </div>
  );
}

function OurInvestments() {
  const {
    location: { pathname },
  } = window;
  const namePages = pathname.includes('/en') ? englishText : portugueseText;
  return (
    <div>
      <Header />
      {ourInvestmentsContainer(namePages)}
    </div>
  );
}

export default OurInvestments;
