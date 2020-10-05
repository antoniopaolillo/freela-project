import React, { useContext } from 'react';
import Context from '../context/context';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { contacts } from '../components/HomeFooter';

function generateLinks({ name, route }) {
  return (
    <Link className="link-mob" to={route} key={name}>
      {name}
    </Link>
  );
}
function HeaderMobile({ namePages, languagebtt, logo }) {
  const { addClass, setAddClass } = useContext(Context);
  return (
    <Menu right>
      {namePages.map(ele => generateLinks(ele))}
      {languagebtt(namePages, setAddClass, addClass)}
      <div className="header-mobile-logo">
        <img src={logo} alt="logo" />
      </div>
      {contacts('-mob')}
    </Menu>
  );
}

export default HeaderMobile;
