import React from 'react';
import Header from '../components/Header';
import '../styles/aboutus.css';
import IMGCONNECTION from '../images/svg/conexion_img.svg';
import IMGINOVATION from '../images/svg/inovation_img.svg';
import CRIATIVITY from '../images/svg/criativity_img.svg';
import VISIONIMG from '../images/svg/vision_img.svg';
import IMG2 from '../images/svg/img_test_2.svg';

const portugueseTexts = {
  title: 'Quem Somos',
  subtitle:
    'Fundada em 2010, pelo ex- jogador profissional de tênis Marcio Torres, a LinkinFirm, em pouco tempo, tornou-se uma agência-boutique muito conceituada no ramo, pela alta qualidade dos atletas agenciados e pelas empresas renomadas com as quais trabalha e representa.',
  valuesTitle: 'Nossos valores:',
  arrValues: ['Inovação', 'Criatividade', 'Visão', 'Conexão'],
};

const englishTexts = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat, lacus id consequat molestie, erat metus faucibus orci, non blandit lorem est et ipsum. Nam enim metus, bibendum in ipsum sit amet, aliquam mollis eros. Nam ac arcu dignissim, posuere mi id,',
};

function titleInfo(title) {
  return <p className="about-us-title-info">{title}</p>;
}

function subtitleInfo(subtitle) {
  return <div className="about-us-subtitle-info">{subtitle}</div>;
}

function cardsInfo(arrValues) {
  const arrayOfImages = [
    [IMGINOVATION, arrValues[0]],
    [CRIATIVITY, arrValues[1]],
    [VISIONIMG, arrValues[2]],
    [IMGCONNECTION, arrValues[3]],
  ];
  return (
    <div className="about-us-cards-container-info">
      {arrayOfImages.map((arr, index) => (
        <div key={arr[1] + index}>
          <p>{arr[1]}</p>
          <img
            src={arr[0]}
            alt={arr[1]}
            className="scale-down-center scale-up-center"
          />
        </div>
      ))}
    </div>
  );
}

function msgInfo(title) {
  return <div className="about-us-info-value">{title}</div>;
}

function infoContainer({ title, subtitle, valuesTitle, arrValues }) {
  return (
    <div className="about-us-info-container">
      {titleInfo(title)}
      {subtitleInfo(subtitle)}
      {msgInfo(valuesTitle)}
      {cardsInfo(arrValues)}
    </div>
  );
}

function imgContainer() {
  return (
    <div className="about-us-img-container">
      <img src={IMG2} alt="great" />
    </div>
  );
}

function pageContainer(obj) {
  return (
    <div className="about-us-page-container">
      {infoContainer(obj)}
      {imgContainer()}
    </div>
  );
}

function AboutUs() {
  const {
    location: { pathname },
  } = window;
  const namePages = pathname.includes('/en') ? englishTexts : portugueseTexts;

  return (
    <div>
      <Header />
      {pageContainer(namePages)}
    </div>
  );
}

export default AboutUs;
