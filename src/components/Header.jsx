import React, { useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/svg/logo.svg';
import HeaderMobile from '../components/HeaderMobile';
import '../styles/header.css';

const englishArray = [
  { name: 'our business', route: '/our-business' },
  { name: 'athletes', route: '/athletes' },
  { name: 'investments', route: '/investments' },
  { name: 'clients', route: '/clients' },
  { name: 'about us', route: '/about-us' },
  { name: 'contact', route: '/contact' },
];

function buttonPages({ name, route }) {
  return (
    <Link className="link" to={route} key={name}>
      {name}
    </Link>
  );
}

function Header() {
  const pageTopRef = useRef(null);
  const scrollToTop = useCallback(() => {
    // eslint-disable-next-line no-unused-expressions
    pageTopRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [pageTopRef]);

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  const namePages = englishArray;
  return (
    <header ref={pageTopRef}>
      <div className="header-mobile">
        <HeaderMobile
          namePages={namePages}
          logo={Logo}
        />
      </div>
      <div className="header-container">
        <div className="header-left-side-container">
          <Link to='/'>
            <img src={Logo} alt="logo" className="logo" />
          </Link>
          <div className="links-container">
            {namePages.map(link => buttonPages(link))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
