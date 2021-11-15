import React from "react";
import Header from "../components/Header";
import "../styles/ourClients.css";
import AliansceSonae from "../images/svg/aliansce_sonae.svg";
import AngaAsset from "../images/svg/anga_asset.svg";
import AppProva from "../images/svg/logodois.svg";
import Asics from "../images/svg/Logo (1).svg";
import Avianca from "../images/svg/Logo (2).svg";
import Babolat from "../images/svg/Logo (3).svg";
import BB from "../images/svg/Logo (4).svg";
import Barracuda from "../images/svg/Logo (5).svg";
import BMG from "../images/svg/Logo (6).svg";
import Ecosolys from "../images/svg/Logo (7).svg";
import CLaro from "../images/svg/Logo (9).svg";
import SLconstrutora from "../images/svg/Logo (8).svg";
import Correios from "../images/svg/Logo (10).svg";
import Csul from "../images/svg/csul.svg";
import Daylong from "../images/svg/Logo (11).svg";
import Deloitte from "../images/svg/Logo (13).svg";
import Estacio from "../images/svg/Logo (12).svg";
import Faberg from "../images/svg/Logo (14).svg";
import Gillette from "../images/svg/gilette.svg";
import Grasp from "../images/svg/1Logo (1).svg";
import Hidracor from "../images/svg/1Logo (2).svg";
import Insperiência from "../images/svg/1Logo (3).svg";
import Joma from "../images/svg/1Logo (4).svg";
import LandRover from "../images/svg/1Logo (5).svg";
import MacMillan from "../images/svg/1Logo (6).svg";
import Motorola from "../images/svg/1Logo (7).svg";
import MRV from "../images/svg/1Logo (8).svg";
import OptimumNutrition from "../images/svg/1Logo (9).svg";
import Solinco from "../images/svg/1Logo (10).svg";
import TennisRoute from "../images/svg/1Logo (11).svg";
import UomoSport from "../images/svg/1Logo (12).svg";
import WellFargos from "../images/svg/1Logo (13).svg";
import Wilson from "../images/svg/1Logo (14).svg";
import XPInvestimentos from "../images/svg/1Logo (15).svg";

const englishText = {
  title: "Lorem ipsum consectetur.",
  subtitle: "Nam ac arcu dignissim, posuere mi id,",
  h1Name: "Our clients",
  roleName1: "Nossos serviços",
  services: [
    "Intermediação de Negócios",
    "Desenvolvimento de Projetos",
    "Parcerias Estratégicas",
    "Prospecção de Negócios",
  ],
  clients: [
    {
      img: AliansceSonae,
      title: "Aliansce sonae",
      subtitle: "Administradora de shoppings centers",
    },
    {
      img: AngaAsset,
      title: "Angá asset",
      subtitle: "Gestão de fundos de investimentos",
    },
    {
      img: AppProva,
      title: "AppProva",
      subtitle: "Plataforma de diagnóstico acadêmico ",
    },
    { img: Asics, title: "Asics", subtitle: "Empresa de artigos desportivos" },
    {
      img: Avianca,
      title: "Avianca airlines",
      subtitle: "Companhia aérea brasileira",
    },
    {
      img: Babolat,
      title: "Babolat",
      subtitle: "Empresa de equipamento esportivos",
    },
    {
      img: BB,
      title: "Banco do Brasil",
      subtitle: "instituição financeira brasileira",
    },
    {
      img: Barracuda,
      title: "Barracuda",
      subtitle: "Empresa de segurança, rede e armazenamento ",
    },
    {
      img: BMG,
      title: "Banco BMG",
      subtitle: "Instituição financeira do Brasil",
    },
    {
      img: Ecosolys,
      title: "Ecosolys",
      subtitle: "Fabricante de produtos para energia solar",
    },
    { img: CLaro, title: "Claro", subtitle: "Serviço de telefonia" },
    {
      img: SLconstrutora,
      title: "SL Construtora",
      subtitle: "Empresa de construção civil",
    },
    {
      img: Correios,
      title: "Correios",
      subtitle: "Empresa de entrega de correspondências",
    },
    { img: Csul, title: "Csul", subtitle: "Projeto de desenvolvimento urbano" },
    {
      img: Daylong,
      title: "Daylong",
      subtitle: "Fabricante de produtos dermocosméticos",
    },
    {
      img: Deloitte,
      title: "Deloitte",
      subtitle: "Consultoria de gerenciamento",
    },
    {
      img: Estacio,
      title: "Estácio",
      subtitle: "Universidade privada brasileira",
    },
    { img: Faberg, title: "Faberg", subtitle: "Empresa de eventos esportivos" },
    {
      img: Gillette,
      title: "Gillette",
      subtitle: "Fabricante de produtos de higiene pessoal",
    },
    { img: Grasp, title: "Grasp", subtitle: "Industria de biotecnologia" },
    {
      img: Hidracor,
      title: "Hidracor",
      subtitle: "Produtos para pintura imobiliária",
    },
    {
      img: Insperiência,
      title: "Insperiência",
      subtitle: "Consultoria de desenvolvimento",
    },
    {
      img: Joma,
      title: "Joma",
      subtitle: "Fornecedora de material esportivo ",
    },
    {
      img: LandRover,
      title: "Land Rover",
      subtitle: "Fabricante de veículos automotores",
    },
    {
      img: MacMillan,
      title: "MacMillan",
      subtitle: "Editora de livros didáticos",
    },
    {
      img: Motorola,
      title: "Motorola",
      subtitle: "Fabricante de produtos eletrônicos",
    },
    { img: MRV, title: "MRV", subtitle: "Construtora imobiliária" },
    {
      img: OptimumNutrition,
      title: "Optimum Nutrition",
      subtitle: "Nutrição esportiva",
    },
    {
      img: Solinco,
      title: "Solinco",
      subtitle: "Fabricante de artigos esportivos",
    },
    {
      img: TennisRoute,
      title: "Tennis Route",
      subtitle: "Centro de treinamento de tênis",
    },
    {
      img: UomoSport,
      title: "Uomo Sport",
      subtitle: "Fabricante de materiais esportivos",
    },
    {
      img: WellFargos,
      title: "Well Fargos",
      subtitle: "Consultoria financeira",
    },
    {
      img: Wilson,
      title: "Wilson",
      subtitle: "Fabricante de artigos esportivos",
    },
    {
      img: XPInvestimentos,
      title: "XP Investimentos",
      subtitle: "Corretora de Câmbio, Títulos e Valores Mobiliários",
    },
  ],
};

const portugueseText = {
  title: "Customers",
   subtitle: "Business Consulting",
   h1Name: "Our customers",
   roleName1: "Our Services",
   services: [
     "Business Intermediation",
     "Project development",
     "Strategic Partnerships",
     "Business Prospecting",
   ],
   clients: [
    {
      img: AliansceSonae,
      title: "Aliansce sonae",
      subtitle: "Shopping center manager",
    },
    {
      img: AngaAsset,
      title: "Angá asset",
      subtitle: "Investment fund management",
    },
    {
      img: AppProva,
      title: "AppProva",
      subtitle: "Academic Diagnostic Platform",
    },
    { img: Asics, title: "Asics", subtitle: "Sporting Goods Company" },
    {
      img: Avianca,
      title: "Avianca airlines",
      subtitle: "Brazilian airline",
    },
    {
      img: Babolat,
      title: "Babolat",
      subtitle: "Sports Equipment Company",
    },
    {
      img: BB,
      title: "Banco do Brasil",
      subtitle: "Brazilian financial institution",
    },
    {
      img: Barracuda,
      title: "Barracuda",
      subtitle: "Security, network and storage company",
    },
    {
      img: BMG,
      title: "Banco BMG",
      subtitle: "Brazilian financial institution",
    },
    {
      img: Ecosolys,
      title: "Ecosolys",
      subtitle: "Manufacturer of products for solar energy",
    },
    { img: CLaro, title: "Clear", subtitle: "Telephone service" },
    {
      img: SLconstrutora,
      title: "SL Construtora",
      subtitle: "Construction company",
    },
    {
      img: Correios,
      title: "Correios",
      subtitle: "Mail delivery company",
    },
    { img: Csul, title: "Csul", subtitle: "Urban development project" },
    {
      img: Daylong,
      title: "Daylong",
      subtitle: "Manufacturer of dermocosmetic products",
    },
    {
      img: Deloitte,
      title: "Deloitte",
      subtitle: "Management Consulting",
    },
    {
      img: Estacio,
      title: "Estácio",
      subtitle: "Private Brazilian University",
    },
    { img: Faberg, title: "Faberg", subtitle: "Sporting Events Company" },
    {
      img: Gillette,
      title: "Gillette",
      subtitle: "Personal care manufacturer",
    },
    { img: Grasp, title: "Grasp", subtitle: "Biotechnology industry" },
    {
      img: Hidracor,
      title: "Hydracor",
      subtitle: "Products for real estate painting",
    },
    {
      img: Insperiência,
      title: "Insperiência",
      subtitle: "Development consultancy",
    },
    {
      img: Joma,
      title: "Joma",
      subtitle: "Supplier of sporting goods",
    },
    {
      img: LandRover,
      title: "Land Rover",
      subtitle: "Manufacturer of motor vehicles",
    },
    {
      img: MacMillan,
      title: "MacMillan",
      subtitle: "Textbook publisher",
    },
    {
      img: Motorola,
      title: "Motorola",
      subtitle: "Electronics Manufacturer",
    },
    { img: MRV, title: "MRV", subtitle: "Real estate builder" },
    {
      img: OptimumNutrition,
      title: "Optimum Nutrition",
      subtitle: "Sports nutrition",
    },
    {
      img: Solinco,
      title: "Solinco",
      subtitle: "Sporting Goods Manufacturer",
    },
    {
      img: TennisRoute,
      title: "Tennis Route",
      subtitle: "Tennis Training Center",
    },
    {
      img: UomoSport,
      title: "Uomo Sport",
      subtitle: "Manufacturer of sporting goods",
    },
    {
      img: WellFargos,
      title: "Well Fargos",
      subtitle: "Financial consultancy",
    },
    {
      img: Wilson,
      title: "Wilson",
      subtitle: "Sporting Goods Manufacturer",
    },
    {
      img: XPInvestimentos,
      title: "XP Investimentos",
      subtitle: "Foreign Exchange, Bonds and Securities",
    },
  ],
};

const card = ({ img, title, subtitle }) => (
  <div className="our-client-card-box">
    <img src={img} alt="client logo" />
    <div className="our-clients-card-texts-container">
      <p className="our-clients-card-texts-title">{title}</p>
      <p className="our-clients-card-texts-subtitle">{subtitle}</p>
    </div>
  </div>
);

function clientsContainer(h1Name, clients) {
  return (
    <div>
      <p className="our-clients-title">{h1Name}</p>
      <div className="our-clients-cards-container">
        {clients.map((client) => card(client))}
      </div>
    </div>
  );
}

function headerTexts(title) {
  return <p className="our-clients-header-title">{title}</p>;
}

function ourServices(services, roleName1) {
  return (
    <div className="services-card-clients-container">
      <p className="athlete-page-ath-title-clients">{roleName1}</p>
      <div className="services-card-clients">
        <span className="card-service-clients scale-up-center">
          <p className="text-card">{services[0]}</p>
        </span>
        <span className="card-service-clients scale-up-center">
          <p className="text-card">{services[1]}</p>
        </span>
        <span className="card-service-clients scale-up-center">
          <p className="text-card">{services[2]}</p>
        </span>
        <span className="card-service-clients scale-up-center">
          <p className="text-card">{services[3]}</p>
        </span>
      </div>
    </div>
  );
}

function ourClientsContainer({ title, h1Name, clients, services, roleName1 }) {
  return (
    <div className="our-clients-container">
      {ourServices(services, roleName1)}
      {clientsContainer(h1Name, clients)}
    </div>
  );
}

function OurClients() {
  const namePages =  portugueseText;
  return (
    <div>
      <Header />
      {ourClientsContainer(namePages)}
    </div>
  );
}

export default OurClients;
