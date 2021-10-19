import React, { useContext } from "react";
import Context from "../context/context";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import InstaImg from "../images/svg/insta_img.svg";
import TwitterImg from "../images/svg/tt_img.svg";
import LinkedinImg from "../images/svg/linkedin_img.svg";

function contacts() {
  return (
    <div className="home-footer-contacts-mob">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/?hl=pt-br"
      >
        <img src={InstaImg} alt="insta contact" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/"
      >
        <img src={LinkedinImg} alt="linkedin contact" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.twitter.com/"
      >
        <img src={TwitterImg} alt="twitter contact" />
      </a>
    </div>
  );
}

function generateLinks({ name, route }) {
  return (
    <Link className="link-mob" to={route} key={name}>
      {name}
    </Link>
  );
}
function HeaderMobile({ namePages, logo }) {
  return (
    <Menu right>
      {namePages.map((ele) => generateLinks(ele))}
      <div className="header-mobile-logo">
        <img src={logo} alt="logo" />
      </div>
      {contacts()}
    </Menu>
  );
}

export default HeaderMobile;
