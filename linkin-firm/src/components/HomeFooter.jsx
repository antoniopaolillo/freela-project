import React from 'react';
import Logo from '../images/svg/logo.svg';
import { Link } from 'react-router-dom';
import InstaImg from '../images/svg/insta_img.svg';
import TwitterImg from '../images/svg/tt_img.svg';
import LinkedinImg from '../images/svg/linkedin_img.svg';
import Olimpic2016 from '../images/svg/olimpic_2016.svg';
import BeneficentInstGuga from '../images/svg/beneficent_inst_guga.svg';
import AustralianOpen2016 from '../images/svg/australian_open_2016.svg';
import TelianaWTA from '../images/svg/teliana_wta.svg';
import USOpen2016 from '../images/svg/us_open_2016.svg';
import USOpen2014 from '../images/svg/us_open_2014.svg';

const englishTexts = {
  link: [
    ['about us', '/en/about-us'],
    ['our business', '/en/our-business'],
    ['athletes', '/en/athletes'],
    ['investments', '/en/our-investments'],
    ['clients', '/en/clients'],
    ['contact', 'en/contact'],
  ],
  title: 'Events and Achievements',
  eventsArr: [
    { title: 'Bruno Soares: Campeão do US Open 2016', img: USOpen2016 },
    { title: 'Bruno Soares: Campeão do US Open 2014', img: USOpen2014 },
    { title: 'Comemorando 1º titulo WTA da Teliana Pereira', img: TelianaWTA },
    {
      title:
        'Comemorando os dois titulos do Australian Open 2016 do Bruno Soares',
      img: AustralianOpen2016,
    },
    {
      title: 'Jantar beneficente do Instituto Guga Kuerten',
      img: BeneficentInstGuga,
    },
    { title: 'Fotos de Gala para Olimpiadas Rio 2016', img: Olimpic2016 },
  ],
};

const portugueseTexts = {
  link: [
    ['sobre nós', '/sobre-nos'],
    ['nosso negócio', '/nosso-negocio'],
    ['atletas', '/atletas'],
    ['investimentos', '/investimentos'],
    ['clientes', '/clientes'],
    ['contato', '/contato'],
  ],
  title: 'Eventos e Conquistas',
  eventsArr: [
    { title: 'Bruno Soares: Campeão do US Open 2016', img: USOpen2016 },
    { title: 'Bruno Soares: Campeão do US Open 2014', img: USOpen2014 },
    { title: 'Comemorando 1º titulo WTA da Teliana Pereira', img: TelianaWTA },
    {
      title:
        'Comemorando os dois titulos do Australian Open 2016 do Bruno Soares',
      img: AustralianOpen2016,
    },
    {
      title: 'Jantar beneficente do Instituto Guga Kuerten',
      img: BeneficentInstGuga,
    },
    { title: 'Fotos de Gala para Olimpiadas Rio 2016', img: Olimpic2016 },
  ],
};

export function contacts(mod = '') {
  return (
    <div className={`home-footer-contacts${mod}`}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/?hl=pt-br">
        <img src={InstaImg} alt="insta contact" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/">
        <img src={LinkedinImg} alt="linkedin contact" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.twitter.com/">
        <img src={TwitterImg} alt="twitter contact" />
      </a>
    </div>
  );
}

function links(arrayOfLinks) {
  return (
    <div className="home-footer-links-container">
      {arrayOfLinks.map(link => (
        <Link className="home-footer-link" key={link[0]} to={link[1]}>
          {link[0]}
        </Link>
      ))}
    </div>
  );
}

function footerLeftSide({ link }) {
  return (
    <div className="home-footer-left-side">
      <img className="home-footer-logo" src={Logo} alt="logo" />
      {contacts()}
      {links(link)}
    </div>
  );
}

function eventCard({ title, img }) {
  return (
    <div key={title} className="home-footer-card">
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
}

function footerRightSide({ title, eventsArr }) {
  return (
    <div className="home-footer-right-side">
      <p className="home-footer-title">{title}</p>
      <div className="home-footer-cards-box">
        {eventsArr.map(each => eventCard(each))}
      </div>
    </div>
  );
}

function HomeFooter() {
  const {
    location: { pathname },
  } = window;
  const namePages = pathname.includes('/en') ? englishTexts : portugueseTexts;
  return (
    <div className="home-footer-container">
      <div className="home-footer-box">
        {footerLeftSide(namePages)}
        {footerRightSide(namePages)}
      </div>
    </div>
  );
}

export default HomeFooter;
