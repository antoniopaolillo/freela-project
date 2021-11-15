import React from "react";
import Header from "../components/Header";
import AthletesList from "../components/AthletesList";
import "../styles/athletes.css";

const englishTexts = {
  title: "Lorem ipsum dolor sit amet",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat, lacus id consequat molestie, erat metus faucibus orci, non blandit lorem est et ipsum. Nam enim metus, bibendum in ipsum sit amet, aliquam mollis eros. Nam ac arcu dignissim, posuere mi id,",
  roleName2: "Our Atlhetes",
};
const portugueseTexts = {
  title: "Atletas",
  subtitle: "Ser atleta é ir muito além de uma vitória ou derrota.",
  roleName2: "Our Atlhetes",
};

function atlhetesSide(roleName2) {
  return (
    <div>
      <p className="athlete-page-ath-title">{roleName2}</p>
      <AthletesList />
    </div>
  );
}

function informationsSide(title, subtitle) {
  return (
    <div className="athlete-page-inf-right">
      <p className="athlete-page-title">{title}</p>
      <p className="athlete-page-subtitle">{subtitle}</p>
    </div>
  );
}

function atlhetesContainer({ title, subtitle, roleName2 }) {
  return (
    <div className="athlete-page-container">
      {atlhetesSide(roleName2)}
    </div>
  );
}

function Athletes() {
  const namePages = portugueseTexts;
  return (
    <div className="athletes-container-outside-mob">
      <Header />
      {atlhetesContainer(namePages)}
    </div>
  );
}

export default Athletes;
