import React from 'react';
import Header from '../components/Header';
import IMG from '../images/png/our-investments-img.png';
import '../styles/ourInvestments.css';

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
function companiesSide(name) {
  return (
    <div>
      <p>{name}</p>
      <div>companies here</div>
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
