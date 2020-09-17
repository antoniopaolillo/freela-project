import React from 'react';
import Header from '../components/Header';
import '../styles/aboutus.css';
import IMG1 from '../images/svg/img_test.svg';
import IMG2 from '../images/svg/img_test_2.svg';

const portugueseTexts = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat, lacus id consequat molestie, erat metus faucibus orci, non blandit lorem est et ipsum. Nam enim metus, bibendum in ipsum sit amet, aliquam mollis eros. Nam ac arcu dignissim, posuere mi id,',
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

function cardsInfo() {
  const arrayOfImages = [
    [IMG1, 'Lorem Ipsum'],
    [IMG1, 'Lorem Ipsum'],
    [IMG1, 'Lorem Ipsum'],
    [IMG1, 'Lorem Ipsum'],
  ];
  return (
    <div className="about-us-cards-container-info">
      {arrayOfImages.map((arr, index) => (
        <div key={arr[1] + index}>
          <p>{arr[1]}</p>
          <img src={arr[0]} alt={arr[1]}/>
        </div>
      ))}
    </div>
  );
}

function infoContainer({ title, subtitle }) {
  return (
    <div className="about-us-info-container">
      {titleInfo(title)}
      {subtitleInfo(subtitle)}
      {cardsInfo()}
    </div>
  );
}

function imgContainer() {
  return (
    <div className="about-us-img-container">
      <img src={IMG2} alt="great"/>
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
