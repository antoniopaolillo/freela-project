import React from 'react';
import Header from '../components/Header';
import '../styles/ourBusiness.css';
import IMG1 from '../images/svg/our_b_1.svg';
import IMG2 from '../images/svg/our_b_2.svg';
import IMG3 from '../images/svg/our_b_3.svg';
import IMG4 from '../images/svg/our_b_4.svg';

const englishText = {
  title: 'Lorem ipsum',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat, lacus id consequat molestie, erat metus faucibus orci, non blandit lorem est et ipsum. Nam enim metus, bibendum in ipsum sit amet, aliquam mollis eros. Nam ac arcu dignissim, posuere mi id,',
};

const portugueseText = {
  title: 'Nossos negócios',
  subtitle:
    'LinkinFirm é especializada na gestão de carreiras e intermediação de negócios, além de prestar consultoria para empresas líderes no mercado do Brasil, Estados Unidos e Itália. A LinkinFirm fornece ideias criativas e conceitos de marketing inovadores para o desenvolvimento de negócios, colocando seus clientes um passo a frente do mercado consumidor.',
  values: [
    'Gestão de carreiras',
    'Intermedicação de negócios',
    'Desenvolvimento de negócios',
    'Consultoria para empresas',
  ],
};

function businessSide(values) {
  return (
    <div className="our-business-imgs-side">
      <div className="our-business-img-container">
        <div className="our-business-img-1 scale-up-center-our-business">
          <img src={IMG1} alt="test" />
          <p className="our-business-img-text">{values[0]}</p>
        </div>
        <div className="our-business-img-2 scale-up-center-our-business">
          <img src={IMG2} alt="test" />
          <p className="our-business-img-text">{values[1]}</p>
        </div>
        <div className="our-business-img-3 scale-up-center-our-business">
          <img src={IMG3} alt="test" />
          <p className="our-business-img-text">{values[2]}</p>
        </div>
        <div className="our-business-img-4 scale-up-center-our-business">
          <img src={IMG4} alt="test" />
          <p className="our-business-img-text">{values[3]}</p>
        </div>
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

function ourBusinessContainer({ title, subtitle, values }) {
  return (
    <div className="our-business-container">
      {textsSide(title, subtitle)}
      {businessSide(values)}
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
