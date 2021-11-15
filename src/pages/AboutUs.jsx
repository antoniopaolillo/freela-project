import React from "react";
import Header from "../components/Header";
import "../styles/aboutus.css";
import IMG2 from "../images/svg/img_test_2.svg";
import MarcioImg from "../images/svg/marc_abt.svg";
import DianaImg from "../images/svg/diana_abt.svg";
import GlauImg from "../images/svg/glau_abt.svg";
import LinkedinLogo from "../images/svg/Group 71.svg";

const portugueseTexts = {
  title: "Quem Somos",
  subtitle:
    "Fundada em 2010, pelo ex- jogador profissional de tênis Marcio Torres, a LinkinFirm, em pouco tempo, tornou-se uma agência-boutique muito conceituada no ramo, pela alta qualidade dos atletas agenciados e pelas empresas renomadas com as quais trabalha e representa.",
  valuesTitle: "Team",
};

const founders = [
  {
    name: "Márcio Torres",
    role: "CEO",
    img: MarcioImg,
    linkedin: "",
  },
  {
    name: "Diana Gabanyis",
    role: "Head of Mídia & PR",
    img: DianaImg,
    linkedin: "",
  },
  {
    name: "Glaucia Catani",
    role: "Chief of Staff",
    img: GlauImg,
    linkedin: "",
  },
];

const englishTexts = {
  title: "About us",
  subtitle:
    "Founded in 2010 by the ex-professional tennis player Marcio Torres, LinkinFirm, in a short time, has become a highly regarded boutique agency in the field, due to the high quality of its agents and the renowned companies with which it works and represents.",
  valuesTitle: "Team",
};

function titleInfo(title) {
  return <p className="about-us-title-info">{title}</p>;
}

function subtitleInfo(subtitle) {
  return <div className="about-us-subtitle-info">{subtitle}</div>;
}

function cardsInfo() {
  return (
    <div className="about-us-people-container">
      {founders.map(({ name, role, img, linkedin }) => (
        <div className="about-us-people">
          <div className="about-us-people-name">{name}</div>
          <div className="about-us-people-role">{role}</div>
          <img className="about-us-people-img" src={img} alt={name}></img>
          <div className="about-us-people-link">
            <a href={linkedin}>
              <img src={LinkedinLogo} alt="linkedin"></img>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

function msgInfo(title) {
  return <div className="about-us-info-value">{title}</div>;
}

function infoContainer({ title, subtitle, valuesTitle }) {
  return (
    <div className="about-us-info-container">
      {titleInfo(title)}
      {subtitleInfo(subtitle)}
      {msgInfo(valuesTitle)}
      {cardsInfo()}
    </div>
  );
}

function imgContainer() {
  return (
    <div className="about-us-img-container">
      <img src={IMG2} alt="great" />
    </div>
  );
}

function pageContainer(obj) {
  return (
    <div className="about-us-page-container">
      {infoContainer(obj)}
      {imgContainer()}
    </div>
  );
}

function AboutUs() {
  const namePages = englishTexts;

  return (
    <div>
      <Header />
      {pageContainer(namePages)}
    </div>
  );
}

export default AboutUs;
