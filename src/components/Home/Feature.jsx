import React from 'react';
import BtnLink from '../utils/BtnLink';
import InstaPics from '../utils/InstaPics';
import img1 from "../../resources/images/htume.jpeg"
import img2 from "../../resources/images/img2.jpeg"
import img3 from "../../resources/images/img2a.jpeg"
const Feature = () => {
  return (
    <section>
      <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="featured_heading">
            We are Featured
          </div>
          <div className="featured_primary">
            What they say
          </div>
          <div className="button_wrapper">
            <BtnLink color="black" location="/" name="Explore All" />
          </div>
        </div>
        <div className="col-lg-8">
          <div className="image_container one">
            <img src={img1} alt=""/>
          </div>
          <div className="image_container two">
            <img src={img2} alt=""/>
          </div>
          <div className="image_container three">
            <img src={img3} alt=""/>
          </div>
          <div className="image_container four">
            <img src={img1} alt=""/>
          </div>
          <div className="image_container five">
            <img src={img2} alt=""/>
          </div>
          <div className="image_container six">
            <img src={img3} alt=""/>
          </div>
        </div>
      </div>
      </div>
      <div className="blog_button_wrapper" style={{fontSize: `2rem`,color: `#000`}}>@ALBERTOTORRESI</div>
      <InstaPics />
    </section>
  );
};

export default Feature;