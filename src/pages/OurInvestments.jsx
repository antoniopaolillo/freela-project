import React from 'react';
import { Link } from 'react-router-dom';
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
  title: 'Investimentos',
  subtitle:
    'Somos um parceiro empreendedor bem conectado que estará ao seu lado, ajudando de maneira impactante.',
  h1Name: 'Nossos investimentos',
  companiesSubtitles: [
    [
      'Turuvius',
      'Pesquisa jurisprudencial inteligente e jurimetria integrada.',
      TuruviusLogo,
      'https://turivius.com/',
    ],
    [
      'Mottu',
      'Plataforma de aluguel de motos',
      MottuLogo,
      'https://mottu.com.br/',
    ],
    [
      'Nexoos',
      'Plataforma de empŕestimo B2B',
      nexoosLogo,
      'https://www.nexoos.com.br/',
    ],
    [
      'Sigalei',
      'Inteligência politica e regulatória',
      sigaleiLogo,
      'https://www.sigalei.com.br/',
    ],
    [
      'Golden Set Analytics',
      'Análise de tênis de alto desempenho com base em Big Data e estatísticas',
      gsaLogo,
      'https://www.goldensetanalytics.com/',
    ],
    [
      'Religion of Sports',
      'Produtora audiovisual esportiva',
      rosLogo,
      'https://www.religionofsports.com/',
    ],
  ],
};

const portugueseText = {
  title: 'Investments',
  subtitle:
    'We are a well-connected entrepreneurial partner who will be by your side, helping you in an impactful way.',
  h1Name: 'Our Investments',
  companiesSubtitles: [
    [
      'Turuvius',
      'Intelligent jurisprudence search and integrated jurisprudence.',
      TuruviusLogo,
      'https://turivius.com/',
    ],
    [
      'Mottu',
      'Motorbike rental platform',
      MottuLogo,
      'https://mottu.com.br/',
    ],
    [
      'Nexoos',
      'B2B Lending Platform',
      nexoosLogo,
      'https://www.nexoos.com.br/',
    ],
    [
      'Sigalei',
      'Political and regulatory intelligence',
      sigaleiLogo,
      'https://www.sigalei.com.br/',
    ],
    [
      'Golden Set Analytics',
      'Big Data and Statistics-Based High Performance Tennis Analysis',
      gsaLogo,
      'https://www.goldensetanalytics.com/',
    ],
    [
      'Religion of Sports',
      'Sports audiovisual producer',
      rosLogo,
      'https://www.religionofsports.com/',
    ],
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
    <Link to={subtitle[3]}>
      <div
        className="our-investments-companies-card"
        style={{ backgroundImage: `url(${subtitle[2]})` }}>
        <div className="companie-card-texts">
          <p className="companie-card-title">{subtitle[0]}</p>
          <p className="companie-card-subtitle">{subtitle[1]}</p>
        </div>
      </div>
    </Link>
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
  const namePages = portugueseText;
  return (
    <div className="our-investments-mob-container">
      <Header />
      {ourInvestmentsContainer(namePages)}
    </div>
  );
}

export default OurInvestments;
