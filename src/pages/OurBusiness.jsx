import React from 'react';
import Header from '../components/Header';
import '../styles/ourBusiness.css';
import IMG1 from '../images/svg/our_b_1.svg';
import IMG2 from '../images/svg/our_b_2.svg';
import IMG3 from '../images/svg/our_b_3.svg';
import IMG4 from '../images/svg/our_b_4.svg';

const portugueseText = {
  title: 'Our business',
  subtitle:
    'LinkinFirm specializes in career management and business intermediation, as well as providing consultancy to leading companies in the Brazilian, US and Italian markets. LinkinFirm provides creative ideas and innovative marketing concepts for business development, putting its clients one step ahead of the consumer market.',
  values: [
    'Career management',
    'Business intermediation',
    'Business development',
    'Consulting for companies',
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
  const namePages =  portugueseText;

  return (
    <div className="our-business-container-outside-mob">
      <Header />
      {ourBusinessContainer(namePages)}
    </div>
  );
}

export default OurBusiness;
