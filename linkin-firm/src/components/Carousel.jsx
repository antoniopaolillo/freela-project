import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CARDIMG from '../images/svg/athlete_card_img.svg';
import DOTCARD from '../images/svg/dot_card.svg';

const arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  29,
];

class SimpleSlider extends React.Component {
  cards() {
    return (
      <div>
        <div className="athlete-card-box-container">
          <div className="athlete-card-box">
            <div className="athlete-card-box-infos">
              <p className="athlete-card-box-infos-title">Lorem ipsum</p>
              <p className="athlete-card-box-infos-subtitle">
                Lorem ipsum tema for gertmun
              </p>
              <p className="athlete-card-box-infos-inf">
                Lorem ipsum tema for getmun
              </p>
            </div>
            <div className="athlete-card-box-img">
              <img src={CARDIMG} alt="white pict" />
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
    return <Slider {...settings}>{arr.map(() => this.cards())}</Slider>;
  }
}

export default SimpleSlider;
