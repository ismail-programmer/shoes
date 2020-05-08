import React from 'react';
import DetailCard from '../utils/DetailCard';
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 6000
  };
  return (
    <section className="carousel_section">
      <Slider className="carousel_slider" {...settings}>
        <DetailCard text="Spring Summer 2020" shoeType="Exclusive Collection" myclassName="carousel_item" bgImage="url(https://cdn.shopify.com/s/files/1/0753/2615/files/exclusive-collection.jpg?v=1570258007)" />
        <DetailCard text="Spring Summer 2020" shoeType="Exclusive Collection" myclassName="carousel_item" bgImage="url(https://cdn.shopify.com/s/files/1/0753/2615/files/exclusive-collection.jpg?v=1570258007)" />
        <DetailCard text="Spring Summer 2020" shoeType="Exclusive Collection" myclassName="carousel_item" bgImage="url(https://cdn.shopify.com/s/files/1/0753/2615/files/exclusive-collection.jpg?v=1570258007)" />
        <DetailCard text="Spring Summer 2020" shoeType="Exclusive Collection" myclassName="carousel_item" bgImage="url(https://cdn.shopify.com/s/files/1/0753/2615/files/exclusive-collection.jpg?v=1570258007)" />
      </Slider>
    </section>
  );
};

export default Carousel;