import React from 'react';
import Slider from 'react-slick';
import CelebReviews from '../utils/CelebReviews';
import BtnLink from '../utils/BtnLink';

const Celebrities = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
    autoplaySpeed: 11000
  };
  return (
    <section className="celebrities">
      <Slider className="carousel_slider" {...settings}>
        <CelebReviews/>
        <CelebReviews/>
        <CelebReviews/>
        <CelebReviews/>
      </Slider>
      <div className="button_wrapper" style={{textAlign: `center`}}>
        <BtnLink color="black" location="/" name="View All" />
      </div>
    </section>
  );
};

export default Celebrities;