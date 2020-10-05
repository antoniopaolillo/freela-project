import React from 'react';
import Header from '../components/Header';
import location from '../images/svg/location.svg';
import mail from '../images/svg/mail.svg';
import phone from '../images/svg/phone.svg';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../styles/contact.css';

const portugueseTexts = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  yourName: 'Seu nome',
  yourPhone: 'Seu telefone',
  email: 'Endereço de email',
  message: 'Mensagem',
  sendMessage: 'ENVIAR MENSAGEM',
  invalidData: 'Dados inválidos!',
};

const englishTexts = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  yourName: 'Your name',
  yourPhone: 'Your phone',
  email: 'Email address',
  message: 'Message',
  sendMessage: 'SEND MESSAGE',
  invalidData: 'Invalid Data!',
};

function descriptions(title, subtitle) {
  return (
    <div>
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}

function contactDetails() {
  return (
    <div className="contact-details-mob">
      <div className="icon-info-container">
        <img src={phone} className="details-icon" alt="phone-icon" />
        <p className="details-number">+1 999 999 999</p>
      </div>
      <div className="icon-info-container">
        <img src={mail} className="details-icon" alt="mail-icon" />
        <p className="details-email">info@linkinfirm.com</p>
      </div>
      <div className="icon-info-container">
        <img src={location} className="details-icon" alt="location-icon" />
        <p className="details-address">
          851 NE 1st Ave - # 1108 Miami, Florida 33132 - USA
        </p>
      </div>
    </div>
  );
}

function textFields(yourName, yourPhone, email, message) {
  return (
    <div className="email-fields-container">
      <div className="email-fields-phone-name-container">
        <div className="email-fields-rules name-field">
          <label htmlFor="name">{yourName}</label>
          <input
            id="name"
            type="text"
            className="input-email-phone-name-fields"
          />
        </div>
        <div className="email-fields-rules phone-field">
          <label htmlFor="phone">{yourPhone}</label>
          <input
            id="phone"
            type="text"
            className="input-email-phone-name-fields"
          />
        </div>
      </div>
      <div className="email-fields-rules email-field">
        <label htmlFor="email">{email}</label>
        <PhoneInput country={'br'} />
      </div>
      <div className="email-fields-rules message-field">
        <label htmlFor="message">{message}</label>
        <textarea id="message" type="text" />
      </div>
    </div>
  );
}

function buttonMessage(text) {
  return <button className="btn-send-msg">{text}</button>;
}

async function sendEmail(event, invalidData) {
  event.preventDefault();
  const { target } = event;
  const objToSend = {
    userName: target[0],
    userPhone: target[1],
    userEmail: target[2],
    message: target[3],
  };
  const result = await fetch(`http://url-will-be-here`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objToSend),
  }).then(res => res.json());
  if (result.message) {
    return alert(invalidData);
  }
  return alert('Email Send!');
}

function emailContainer({
  yourName,
  yourPhone,
  email,
  message,
  sendMessage,
  invalidData,
}) {
  return (
    <div className="email-side-container">
      <div className="email-container">
        <form className="email-box" onSubmit={e => sendEmail(e, invalidData)}>
          {textFields(yourName, yourPhone, email, message)}
          <div className="btn-send-msg-container">
            {buttonMessage(sendMessage)}
          </div>
        </form>
      </div>
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
