import React from 'react';
import Slider from 'react-slick';
import Card from '../utils/Card';

const Products = ({active}) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: window.innerWidth < 1000 ? window.innerWidth > 700 ? 3 : window.innerWidth > 500 ? 2 :1 : 4,
    slidesToScroll: 1,
    // arrows: false,
    autoplaySpeed: 11000
  };
  const genders = ["Men","Women"]
  const showBtns = ()=>{
    return genders.map((el,i)=> <button className={`btn_products ${el=== active ? "active" : ""}`} key={i}>{el}</button>)
  }
  return (
    <section className="ProductListWrapper">
      <div className="gender_btn_wrapper">
        {showBtns()}
      </div>
      <Slider className="slider" {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </section>
  );
};

export default Products;