import React, { useContext } from 'react';
import Context from '../context/context';
import { Link } from 'react-router-dom';
import Logo from '../images/svg/logo.svg';
import BrazilFlag from '../images/svg/brazil-flag.svg';
import USAFlag from '../images/svg/usa-flag.svg';
import Siwpper from '../images/svg/siwpper.svg';
import '../styles/header.css';

const portugueseArray = [
  { name: 'sobre nós', route: '/sobre-nos' },
  { name: 'nosso négocio', route: '/nosso-negocio' },
  { name: 'atletas', route: '/atletas' },
  { name: 'investimentos', route: '/investimentos' },
  { name: 'clientes', route: '/clientes' },
  { name: 'contato', route: '/contato' },
];

const englishArray = [
  { name: 'about us', route: '/en/about-us' },
  { name: 'our business', route: '/en/our-business' },
  { name: 'athletes', route: '/en/athletes' },
  { name: 'investments', route: '/en/investments' },
  { name: 'clients', route: '/en/clients' },
  { name: 'contact', route: '/en/contact' },
];

function languageButton(icon, text, setAddClass, addClass) {
  const cardClass = ['btn-language'];

  if (addClass === true) {
    cardClass.push('scale-up-ver-top');
  }

  return (
    <div
      className={cardClass.join(' ')}
      onClick={() => {
        setAddClass(!addClass);
      }}>
      <div
        className={cardClass.length === 2 ? 'btn-active btn-after-click' : 'btn-active'}>
        <img src={icon} alt={'flag'} className="btn-flag" />
        <p>{text}</p>
        <img src={Siwpper} alt="siwpper" className="btn-siwpper" />
      </div>
      <div
        className={cardClass.length === 2 ? 'btn-active' : 'btn-display-none btn-active'}>
        <img src={icon} alt={'flag'} className="btn-flag" />
        <p>{text}</p>
        <img src={Siwpper} alt="siwpper" className="btn-siwpper" />
      </div>
    </div>
  );
}

function languageButtonsGenerator(currentLanguage, setAddClass, addClass) {
  if (currentLanguage[0].name === 'sobre nós') {
    return languageButton(BrazilFlag, 'Português', setAddClass, addClass);
  }
  return languageButton(USAFlag, 'English', setAddClass, addClass);
}

function buttonPages({ name, route }) {
  return (
    <Link className="link" to={route} key={name}>
      {name}
    </Link>
  );
}

function Header() {
  const {
    location: { pathname },
  } = window;
  const namePages = pathname.includes('/en') ? englishArray : portugueseArray;
  const { addClass, setAddClass } = useContext(Context);

  return (
    <header>
      <div className="header-container">
        <div className="header-left-side-container">
          <img src={Logo} alt="logo" className="logo" />
          <div className="links-container">
            {namePages.map(link => buttonPages(link))}
          </div>
        </div>
        <div className="language-container">
          {languageButtonsGenerator(namePages, setAddClass, addClass)}
        </div>
      </div>
    </header>
  );
}

export default Header;
