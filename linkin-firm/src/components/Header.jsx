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

function languageButton(icon, text, setAddClass, addClass) {
  return (
    <div>
      <div className="btn-language scale-up-ver-top">
        <div className="btn-active">
        <img src={icon} alt={'flag'} className="btn-flag" />
        <p>{text}</p>
        <img src={Siwpper} alt="siwpper" className="btn-siwpper" />
        </div>
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
        <img src={Logo} alt="logo" className="logo" />
        <div className="links-container">
          {namePages.map(link => buttonPages(link))}
          {languageButtonsGenerator(namePages, setAddClass, addClass)}
        </div>
      </div>
    </header>
  );
}

export default Header;
