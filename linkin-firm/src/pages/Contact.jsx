import React from 'react';
import Header from '../components/Header';
import location from '../images/svg/location.svg';
import mail from '../images/svg/mail.svg';
import phone from '../images/svg/phone.svg';
import '../styles/contact.css'

const portugueseTexts = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  yourName: 'Seu nome',
  yourPhone: 'Seu telefone',
  email: 'Endereço de email',
  message: 'Mensagem',
  sendMessage: 'Enviar mensagem',
};

const englishTexts = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  yourName: 'Your name',
  yourPhone: 'Your phone',
  email: 'Email address',
  message: 'Message',
  sendMessage: 'Send Message',
};

function descriptions(title, subtitle) {
  return (
    <div>
      <p className="title">{title}</p>
      <p className="title-border-bottom" />
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}

function contactDetails() {
  return (
    <div>
      <div className="icon-info-container">
        <img src={phone} className="details-icon" alt="phone-icon" />
        <p className="details-number">+1 999 999 999</p>
      </div>
      <div className="icon-info-container">
        <img src={mail} className="details-icon" alt="mail-icon"/>
        <p className="details-email">info@linkinfirm.com</p>
      </div>
      <div className="icon-info-container">
        <img src={location} className="details-icon" alt="location-icon"/>
        <p className="details-address">
          851 NE 1st Ave - # 1108 Miami, Florida 33132 - USA
        </p>
      </div>
    </div>
  );
}

function textFields(yourName, yourPhone, email, message) {
  return (
    <div>
      <label>{yourName}</label>
      <input type="text" />
      <label>{yourPhone}</label>
      <input type="text" />
      <label>{email}</label>
      <input type="text" />
      <label>{message}</label>
      <input type="text" />
    </div>
  );
}

function buttonMessage(text) {
  return <button>{text}</button>;
}

function emailContainer({ yourName, yourPhone, email, message, sendMessage }) {
  return (
    <div className="email-container">
      {textFields(yourName, yourPhone, email, message)}
      {buttonMessage(sendMessage)}
    </div>
  );
}

function descriptionsAndDetailsContainer({ title, subtitle }) {
  return (
    <div className="description-and-details-container">
      {descriptions(title, subtitle)}
      {contactDetails()}
    </div>
  );
}

function contactBody(texts) {
  return (
    <div className="contact-body">
      {descriptionsAndDetailsContainer(texts)}
      {emailContainer(texts)}
    </div>
  );
}

function Contact() {
  const {
    location: { pathname },
  } = window;
  const namePages = pathname.includes('/en') ? englishTexts : portugueseTexts;

  return (
    <div>
      <Header />
      <div className="contact-container">{contactBody(namePages)}</div>
    </div>
  );
}

export default Contact;
