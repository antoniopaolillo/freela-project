import React, { useContext } from 'react';
import Context from '../context/context';
import { Link } from 'react-router-dom';
import Logo from '../images/svg/logo.svg';
import BrazilFlag from '../images/svg/brazil-flag.svg';
import USAFlag from '../images/svg/usa-flag.svg';
import Siwpper from '../images/svg/siwpper.svg';
import HeaderMobile from '../components/HeaderMobile';
import '../styles/header.css';

const portugueseArray = [
  { name: 'nosso négocio', route: '/nosso-negocio' },
  { name: 'atletas', route: '/atletas' },
  { name: 'investimentos', route: '/nossos-investimentos' },
  { name: 'clientes', route: '/nossos-clientes' },
  { name: 'sobre nós', route: '/sobre-nos' },
  { name: 'contato', route: '/contato' },
];

const englishArray = [
  { name: 'our business', route: '/en/our-business' },
  { name: 'athletes', route: '/en/athletes' },
  { name: 'investments', route: '/en/investments' },
  { name: 'clients', route: '/en/clients' },
  { name: 'about us', route: '/en/about-us' },
  { name: 'contact', route: '/en/contact' },
];

function languageButton(arr, setAddClass, addClass) {
  const cardClass = ['btn-language'];

  if (addClass === true) {
    cardClass.push('scale-up-ver-top');
  }

  return (
    <div className={cardClass.join(' ')}>
      <div
        className="btn-active"
        onClick={() => {
          setAddClass(!addClass);
        }}>
        <img src={arr[0]} alt={'flag'} className="btn-flag" />
        <p>{arr[1]}</p>
        <img src={Siwpper} alt="siwpper" className="btn-siwpper" />
      </div>
      <Link
        to={arr[2]}
        className={
          cardClass.length === 2 ? 'btn-active btn-work' : 'btn-display-none'
        }>
        <img src={arr[3]} alt={'flag'} className="btn-flag" />
        <p>{arr[4]}</p>
        <img src={Siwpper} alt="siwpper" className="btn-siwpper" />
      </Link>
    </div>
  );
}

function languageButtonsGenerator(currentLanguage, setAddClass, addClass) {
  if (currentLanguage[0].name === 'sobre nós') {
    return languageButton(
      [BrazilFlag, 'Português', '/en', USAFlag, 'English'],
      setAddClass,
      addClass
    );
  }
  return languageButton(
    [USAFlag, 'English', '/', BrazilFlag, 'Português'],
    setAddClass,
    addClass
  );
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
      <div className="header-mobile">
        <HeaderMobile
          namePages={namePages}
          languagebtt={languageButtonsGenerator}
          logo={Logo}
        />
      </div>
      <div className="header-container">
        <div className="header-left-side-container">
          <Link to={pathname.includes('/en') ? '/en' : '/'}>
            <img src={Logo} alt="logo" className="logo" />
          </Link>
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
