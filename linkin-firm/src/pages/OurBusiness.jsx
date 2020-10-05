import React from 'react';
import Header from '../components/Header';
import '../styles/ourBusiness.css';
import card_test1 from '../images/svg/our_b_0.svg';
import card_test2 from '../images/svg/our_b_1.svg';

const englishText = {
  title: 'Lorem ipsum',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat, lacus id consequat molestie, erat metus faucibus orci, non blandit lorem est et ipsum. Nam enim metus, bibendum in ipsum sit amet, aliquam mollis eros. Nam ac arcu dignissim, posuere mi id,',
};

const portugueseText = {
  title: 'Lorem ipsum',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat, lacus id consequat molestie, erat metus faucibus orci, non blandit lorem est et ipsum. Nam enim metus, bibendum in ipsum sit amet, aliquam mollis eros. Nam ac arcu dignissim, posuere mi id,',
};

function businessSide() {
  return (
    <div className="our-business-imgs-side">
      <div className="our-business-img-container">
        <img
          className="our-business-img-1 scale-up-center-our-business"
          src={card_test1}
          alt="test"
        />
        <img
          className="our-business-img-2 scale-up-center-our-business"
          src={card_test2}
          alt="test"
        />
        <img
          className="our-business-img-3 scale-up-center-our-business"
          src={card_test1}
          alt="test"
        />
        <img
          className="our-business-img-4 scale-up-center-our-business"
          src={card_test2}
          alt="test"
        />
      </div>
    </div>
  );
}

function textsSide(title, subtitle) {
  return (
    <div className="our-business-texts-side">
      <p className="our-business-texts-title">{title}</p>
      <p className="our-business-texts-subtitle">{subtitle}</p>
    </div>
  );
}

function ourBusinessContainer({ title, subtitle }) {
  return (
    <div className="our-business-container">
      {textsSide(title, subtitle)}
      {businessSide()}
    </div>
  );
}

function OurBusiness() {
  const {
    location: { pathname },
  } = window;
  const namePages = pathname.includes('/en') ? englishText : portugueseText;

  return (
    <div className="our-business-container-outside-mob">
      <Header />
      {ourBusinessContainer(namePages)}
    </div>
  );
}

export default OurBusiness;
