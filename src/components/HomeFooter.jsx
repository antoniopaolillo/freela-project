import React from "react";
import Logo from "../images/svg/logo.svg";
import InstaImg from "../images/svg/insta_img.svg";
import TwitterImg from "../images/svg/tt_img.svg";
import LinkedinImg from "../images/svg/linkedin_img.svg";
import location from "../images/svg/location.svg";
import mail from "../images/svg/mail.svg";
import phone from "../images/svg/phone.svg";

const englishTexts = {
  contactMessage: "Contact",
  socialMedia: "Follow our social medias",
};

const portugueseTexts = {
  contactMessage: "Contact us",
  socialMedia: "Siga as nossas redes sociais",
};

function contactDetails({ contactMessage }) {
  return (
    <div className="">
      <div className="home-contact-message">{contactMessage}</div>
      <div className="icon-info-container">
        <img src={mail} className="details-icon" alt="mail-icon" />
        <p className="details-email">info@linkinfirm.com</p>
      </div>
      <div className="icon-info-container">
        <img src={location} className="details-icon" alt="location-icon" />
        <p className="details-address">Miami - Madrid - São Paulo</p>
      </div>
    </div>
  );
}
function footerSocialMedias({ socialMedia }) {
  return (
    <div className="home-contacts-container">
      <div className="home-contact-message">{socialMedia}</div>
      <div className="home-footer-contacts">
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
    </div>
  );
}

function footerBorder() {
  return <div className="home-footer-border"></div>;
}

function HomeFooter() {
  const namePages = portugueseTexts;
  return (
    <div className="home-footer-container">
      <img className="home-footer-logo" src={Logo} alt="logo" />
      <div className="home-footer-box">
        {contactDetails(namePages)}
      </div>
      <div className="home-footer-copyright">Copyright © LinkinFirm</div>
    </div>
  );
}

export default HomeFooter;
