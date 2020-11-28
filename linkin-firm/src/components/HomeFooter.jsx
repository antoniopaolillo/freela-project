import React from "react";
import Logo from "../images/svg/logo.svg";
import { Link } from "react-router-dom";
import InstaImg from "../images/svg/insta_img.svg";
import TwitterImg from "../images/svg/tt_img.svg";
import LinkedinImg from "../images/svg/linkedin_img.svg";
import location from '../images/svg/location.svg';
import mail from '../images/svg/mail.svg';
import phone from '../images/svg/phone.svg';

const englishTexts = {
  contactMessage: "Contact",
  socialMedia: "Follow our social medias",
};

const portugueseTexts = {
  contactMessage: "Entre em contato",
  socialMedia: "Siga nossas redes sociais",
};

function contactDetails({ contactMessage }) {
  return (
    <div className="">
      <div className="home-contact-message">{contactMessage}</div>
      <div className="icon-info-container">
        <img src={phone} className="details-icon" alt="phone-icon" />
        <div className="details-number-container">
          <p className="details-number">+1 305 890 95-74</p>
          <p className="details-number">+55 11 94286-7820</p>
        </div>
      </div>
      <div className="icon-info-container">
        <img src={mail} className="details-icon" alt="mail-icon" />
        <p className="details-email">info@linkinfirm.com</p>
      </div>
      <div className="icon-info-container">
        <img src={location} className="details-icon" alt="location-icon" />
        <p className="details-address">
        Miami - Madrid - São Paulo
        </p>
      </div>
    </div>
  );
}

function footerBorder() {
  return <div className="home-footer-border"></div>
}

function HomeFooter() {
  const {
    location: { pathname },
  } = window;
  const namePages = pathname.includes("/en") ? englishTexts : portugueseTexts;
  return (
    <div className="home-footer-container">
      <img className="home-footer-logo" src={Logo} alt="logo" />
      <div className="home-footer-box">
        {contactDetails(namePages)}
        {footerBorder()}
        {/* {footerSocialMedias(namePages)} */}
      </div>
    </div>
  );
}

export default HomeFooter;
