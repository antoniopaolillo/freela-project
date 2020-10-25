import React from 'react';
import Header from '../components/Header';
import IMG from '../images/png/our-investments-img.png';
import '../styles/ourInvestments.css';
import TuruviusLogo from '../images/svg/turuvius_logo.svg';
import MottuLogo from '../images/svg/Mottu_logo.svg';
import nexoosLogo from '../images/svg/nexoos_logo.svg';
import gsaLogo from '../images/svg/gsa_logo.svg';
import sigaleiLogo from '../images/svg/sigalei_logo.svg';
import rosLogo from '../images/svg/ros_logo.svg';

const englishText = {
  title: 'Lorem ipsum consectetur.',
  subtitle: 'Nam ac arcu dignissim, posuere mi id,',
  h1Name: 'Our Companies',
};

const portugueseText = {
  title: 'Investimentos',
  subtitle: 'Somos um parceiro empreendedor bem conectado que estará ao seu lado, ajudando de maneira impactante.',
  h1Name: 'Nossos investimentos',
  companiesSubtitles: [
    [
      'Turuvius',
      'Pesquisa jurisprudencial inteligente e jurimetria integrada.',
      TuruviusLogo,
    ],
    ['Mottu', 'Plataforma de aluguel de motos', MottuLogo],
    ['Nexoos', 'Plataforma de empŕestimo B2B', nexoosLogo],
    ['Sigalei', 'Inteligência politica e regulatória', sigaleiLogo],
    [
      'Golden Set Analytics',
      'Análise de tênis de alto desempenho com base em Big Data e estatísticas',
      gsaLogo,
    ],
    ['Religion of Sports', 'Produtora audiovisual esportiva', rosLogo],
  ],
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
    <div className="our-investments-apresentation-mob">
      <div className="our-investments-apresentation-container">
        {textsContainer(title, subtitle)}
        {imgContainer()}
      </div>
    </div>
  );
}

function companiesCards(subtitles) {
  return subtitles.map(subtitle => (
    <div className="our-investments-companies-card" style={{ backgroundImage: `url(${subtitle[2]})`}}>
      <div className="companie-card-texts">
        <p className="companie-card-title">{subtitle[0]}</p>
        <p className="companie-card-subtitle">{subtitle[1]}</p>
      </div>
    </div>
  ));
}

function companiesSide(name, subtitles) {
  return (
    <div className="our-investments-companies-side">
      <div className="our-investments-companies-mob">
        <p className="our-investments-companies-side-title">{name}</p>
        <div className="companies-cards-container">
          {companiesCards(subtitles)}
        </div>
      </div>
    </div>
  );
}

function ourInvestmentsContainer({
  title,
  subtitle,
  h1Name,
  companiesSubtitles,
}) {
  return (
    <div className="our-investments-container">
      {apresentationSide(title, subtitle)}
      {companiesSide(h1Name, companiesSubtitles)}
    </div>
  );
}

function OurInvestments() {
  const {
    location: { pathname },
  } = window;
  const namePages = pathname.includes('/en') ? englishText : portugueseText;
  return (
    <div className="our-investments-mob-container">
      <Header />
      {ourInvestmentsContainer(namePages)}
    </div>
  );
}

export default OurInvestments;
