import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/svg/logo.svg';
import BrazilFlag from '../images/svg/brazil-flag.svg';
import USAFlag from '../images/svg/usa-flag.svg';
import Siwpper from '../images/svg/siwpper.svg';
import '../styles/header.css';

const portugueseArray = [
  { name: 'sobre nós', route: '/sobre-nos' },
  { name: 'nosso négocio', route: '/nosso-negocio' },
  { name: 'clientes', route: '/clientes' },
  { name: 'empresas', route: '/empresas' },
  { name: 'contato', route: '/contato' },
];

const englishArray = [
  { name: 'about us', route: '/about-us' },
  { name: 'our business', route: '/our-business' },
  { name: 'clients', route: '/clients' },
  { name: 'companies', route: '/companies' },
  { name: 'contact', route: '/contact' },
];

function languageButton(icon, text) {
  return (
    <div className="btn-language">
      <img src={icon} alt={'flag'} className="btn-flag" />
      <p>{text}</p>
      <img src={Siwpper} alt="siwpper" className="btn-siwpper" />
    </div>
  );
}

function languageButtonsGenerator(currentLanguage) {
  if (currentLanguage[0].name === 'sobre nós') {
    return languageButton(BrazilFlag, 'Português');
  }
  return languageButton(USAFlag, 'English');
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

  return (
    <header>
      <div className="header-container">
        <img src={Logo} alt="logo" className="logo" />
        <div className="links-container">
          {namePages.map(link => buttonPages(link))}
          {languageButtonsGenerator(namePages)}
        </div>
      </div>
    </header>
  );
}

export default Header;
