import React from 'react';
import Slider from 'react-slick';
import Review from '../utils/Review';

const Reviews = () => {
  return (
    <section className="reviews_section">
      <Slider className="review_slider">
        <Review />
        <Review />
        <Review />
        <Review />
      </Slider>
    </section>
  );
};

export default Reviews;