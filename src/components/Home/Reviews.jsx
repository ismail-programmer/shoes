import React from 'react';
import Slider from 'react-slick';
import Review from '../utils/Review';

import reviewsBGImg from '../../resources/images/reviews-bg.png';

const Reviews = () => {
  return (
    <section
      className='reviews_section'
      style={{ backgroundImage: `url(${reviewsBGImg})` }}
    >
      <Slider className='review_slider'>
        <Review />
        <Review />
        <Review />
        <Review />
      </Slider>
    </section>
  );
};

export default Reviews;
