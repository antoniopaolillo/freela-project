import React from 'react';
import HomeInfoImg from '../images/svg/img_HomeInfo.svg';
import '../styles/home.css';

const englishTexts = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat, lacus id consequat molestie, erat metus faucibus orci, non blandit lorem est et ipsum. Nam enim metus, bibendum in ipsum sit amet, aliquam mollis eros. Nam ac arcu dignissim, posuere mi id,',
};

const portugueseTexts = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat, lacus id consequat molestie, erat metus faucibus orci, non blandit lorem est et ipsum. Nam enim metus, bibendum in ipsum sit amet, aliquam mollis eros. Nam ac arcu dignissim, posuere mi id,',
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
        <p className="home-info-texts-subtitle">{subtitle}</p>
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
