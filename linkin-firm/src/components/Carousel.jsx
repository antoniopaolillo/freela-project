import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgAndre from '../images/svg/atletas/bg-andre.svg';
import imgAdriano from '../images/svg/atletas/bg-adriano.svg';
import imgBia from '../images/svg/atletas/bg-bia.svg';
import imgBob from '../images/svg/atletas/bg-bob.svg';
import imgBruno from '../images/svg/atletas/bg-bruno.svg';
import imgMike from '../images/svg/atletas/bg-mike.svg';
import imgNelsinho from '../images/svg/atletas/bg-nelsinho.svg';
import imgTeliana from '../images/svg/atletas/bg-teliana.svg';
import imgThiago from '../images/svg/atletas/bg-thiago.svg';
import imgThomaz from '../images/svg/atletas/bg-thomaz.svg';
import instagramIco from '../images/svg/instagram.svg';
import facebookIco from '../images/svg/facebook.svg';
import twitterIco from '../images/svg/twitter.svg';
// import setaDireita from '../images/svg/seta esquerda.svg';
// import setaEsquerda from '../images/svg/seta direita.svg';



const cardingObj = {
  title: [
    'Andre Sa',
    'Adriano de Souza',
    'Bia Haddad Maia',
    'Bob Bryan',
    'Mike Bryan',
    'Bruno Soares',
    'Nelsinho Piquet',
    'Teliana Pereira',
    'Thiago Monteiro',
    'Thomaz Bellucci'
  ],
  subtitle: [
    'Tenista profissional brasileiro',
    'Surfista profissional brasileiro',
    'Tenista profissional brasileira',
    'Tenista profissional americano',
    'Tenista profissional americano',
    'Tenista profissional brasileiro',
    'Automobilista profissional brasileiro',
    'Tenista profissional brasileira',
    'Tenista profissional brasileiro',
    'Tenista profissional brasileiro'
  ],
  imgSocial: [
    instagramIco,
    facebookIco,
    twitterIco,
  ],
  link: {
    instagram: [

    ],
    facebook: [

    ],
    twitter: [

    ],
  },
  img: [
    imgAndre,
    imgAdriano,
    imgBia,
    imgBob,
    imgMike,
    imgBruno,
    imgNelsinho,
    imgTeliana,
    imgThiago,
    imgThomaz
  ]
}



class SimpleSlider extends React.Component {
  cards(index) {
    return (
      <div>

        <div className="athlete-card-box-container">
          <div className="athlete-card-box">
            <div className="athlete-card-box-infos">
              <p className="athlete-card-box-infos-title">{cardingObj.title[index]}</p>
              <p className="athlete-card-box-infos-subtitle">
                {cardingObj.subtitle[index]}
              </p>
            </div>
            <div className="social-icons">
              <img className="icon-social" src={cardingObj.imgSocial[0]} alt="Instagram link" />
              <img className="icon-social" src={cardingObj.imgSocial[1]} alt="Facebook Link" />
              <img className="icon-social" src={cardingObj.imgSocial[2]} alt="Twitter" />
            </div>
            <div className="athlete-card-box-img">
              <img src={cardingObj.img[index]} alt={cardingObj.title[index]} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    var settings = {
      dots: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 10,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return <Slider {...settings}>{cardingObj.title.map((value, index) => this.cards(index))}</Slider>;
  }
}

export default SimpleSlider;
