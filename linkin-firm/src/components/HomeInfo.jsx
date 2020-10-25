import React from 'react';
import HomeInfoImg from '../images/svg/marcio_home_img.svg';
import '../styles/home.css';

const englishTexts = {
  title: 'Marcio Torres',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat, lacus id consequat molestie, erat metus faucibus orci, non blandit lorem est et ipsum. Nam enim metus, bibendum in ipsum sit amet, aliquam mollis eros. Nam ac arcu dignissim, posuere mi id,',
};

const portugueseTexts = {
  title: 'Marcio Torres',
subtitle: `Iniciou sua carreira no tênis, se destacando por alcançar o ranking #1 do Brasil! \r Nos EUA formou-se em Medicina esportiva e concluiu o MBA em  Comércio Exterior.\n Jogou no ATP Tour por 9 anos, alcançando o ranking #132 do mundo. \n Sofreu uma grave contusão que o tirou cedo das quadras, quando decidiu fundar a LinkinFirm com o objetivo de ajudar a potencializando as conexões entre empresas e atletas.`,
};

function imgSide() {
  return (
    <div className="home-info-img-container">
      <img src={HomeInfoImg} alt="test" />
    </div>
  );
}

function textsSide({ title, subtitle }) {
  return (
    <div className="home-info-texts-container">
      <div className="home-info-texts-box">
        <p className="home-info-texts-title">{title}</p>
        <span className="home-info-texts-subtitle">{subtitle}</span>
      </div>
    </div>
  );
}

function HomeInfo() {
  const {
    location: { pathname },
  } = window;
  const namePages = pathname.includes('/en') ? englishTexts : portugueseTexts;
  return (
    <div className="home-info-container">
      <div className="home-info-box">
        {imgSide()}
        {textsSide(namePages)}
      </div>
    </div>
  );
}

export default HomeInfo;
