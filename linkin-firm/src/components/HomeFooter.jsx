/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Logo from '../images/svg/logo.svg';
import { Link } from 'react-router-dom';
import InstaImg from '../images/svg/insta_img.svg';
import TwitterImg from '../images/svg/tt_img.svg';
import LinkedinImg from '../images/svg/linkedin_img.svg';

const englishTexts = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non mauris et lectus hendrerit sagittis. Duis mollis turpis lacus, in bibendum nunc consequat et. Nullam ut mauris eu felis suscipit laoreet vitae convallis nulla. Nunc nec nulla massa. Morbi nec risus sit amet enim blandit facilisis. Nunc fringilla suscipit rutrum. Nulla dolor risus, luctus vitae arcu a, consectetur lacinia ex. Nulla venenatis auctor arcu, ac pellentesque magna ullamcorper a. Etiam sed gravida quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec sem in enim condimentum feugiat.',
  link: [
    ['about us', '/en/about-us'],
    ['our business', '/en/our-business'],
    ['athletes', '/en/athletes'],
    ['investments', '/en/our-investments'],
    ['clients', '/en/clients'],
    ['contact', 'en/contact'],
  ],
};

const portugueseTexts = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non mauris et lectus hendrerit sagittis. Duis mollis turpis lacus, in bibendum nunc consequat et. Nullam ut mauris eu felis suscipit laoreet vitae convallis nulla. Nunc nec nulla massa. Morbi nec risus sit amet enim blandit facilisis. Nunc fringilla suscipit rutrum. Nulla dolor risus, luctus vitae arcu a, consectetur lacinia ex. Nulla venenatis auctor arcu, ac pellentesque magna ullamcorper a. Etiam sed gravida quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec sem in enim condimentum feugiat.',
  link: [
    ['sobre nós', '/sobre-nos'],
    ['nosso negócio', '/nosso-negocio'],
    ['atletas', '/atletas'],
    ['investimentos', '/investimentos'],
    ['clientes', '/clientes'],
    ['contato', '/contato'],
  ],
};

function contacts() {
  return (
    <div className="home-footer-contacts">
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

function footerRightSide({ title, subtitle, description }) {
  return (
    <div className="home-footer-right-side">
      <p className="home-footer-title">{title}</p>
      <p className="home-footer-subtitle">{subtitle}</p>
      <p className="home-footer-description">{description}</p>
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
