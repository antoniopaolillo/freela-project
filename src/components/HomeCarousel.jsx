import React, { useEffect } from 'react';
import Carousel1 from '../images/svg/home_carousel_1.svg';
import Carousel2 from '../images/svg/home_carousel_2.svg';
import Carousel3 from '../images/svg/home_carousel_3.svg';
import ArrowRight from '../images/svg/arrow_rigth.svg';
import ArrowLeft from '../images/svg/arrow_left.svg';
import { Link } from 'react-router-dom';
var slideIndex = 1;

const englishTexts = [
  [
    Carousel1,
    'Lorem ipsum dolor sit amet',
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be",
    'VEJA MAIS',
    '/en/athletes'
  ],
  [
    Carousel2,
    'Lorem ipsum dolor sit amet',
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be",
    'VEJA MAIS',
    '/en/our-business'
  ],
  [
    Carousel3,
    'Lorem ipsum dolor sit amet',
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be",
    'VEJA MAIS',
    '/en/our-clients'
  ],
];

const portugueseTexts = [
  [
    Carousel1,
    "Ser atleta é ir muito além de uma vitória",
    'VEJA MAIS',
    '/atletas'
  ],
  [
    Carousel2,
    'Ajudando grandes empresas a fazerem grandes negócios',
    'VEJA MAIS',
    '/nosso-negocio'
  ],
  [
    Carousel3,
    'Colocando seus clientes um passo a frente',
    'VEJA MAIS',
    '/nossos-clientes'
  ],
];

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

function generateSlide(arr, index) {
  return (
    <div key={`${arr[1]}-${index}`} className="mySlides fade">
      <div className="carousel-home-box">
        <div className="carousel-img-buttons-container">
          <div className="carousel-img-big-box">
            <img src={arr[0]} alt="idol" />
          </div>
          <div className="btn-carousel-home-container">
            <button
              className="btn-carousel-home btn-left"
              onClick={() => plusSlides(-1)}>
              <img src={ArrowLeft} alt="arrow left" />
            </button>
            <button
              className="btn-carousel-home btn-right"
              onClick={() => plusSlides(1)}>
              <img src={ArrowRight} alt="arrow right" />
            </button>
          </div>
        </div>
        <div className="carousel-home-info-container">
          <p className="carousel-home-info-title">{arr[1]}</p>
          <Link to={arr[3]}>{arr[2]}</Link>
        </div>
      </div>
    </div>
  );
}

function HomeCarousel() {
  const {
    location: { pathname },
  } = window;
  const namePages = pathname.includes('/en') ? englishTexts : portugueseTexts;
  useEffect(() => {
    showSlides(slideIndex);
  });
  return (
    <div className="carousel-home-container">
      <div className="slideshow-container">
        {namePages.map((arr, index) => generateSlide(arr, index))}
      </div>
      <div className="carousel-home-dots-container">
        <div className="carousel-home-dots-box">
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel;
