import React from 'react';
import BtnLink from '../utils/BtnLink';
import InstaPics from '../utils/InstaPics';

import img1 from '../../resources/images/featured1.png';
import img2 from '../../resources/images/featured2.png';
import img3 from '../../resources/images/featured3.png';
import img4 from '../../resources/images/featured4.png';
import img5 from '../../resources/images/featured5.png';
import img6 from '../../resources/images/featured6.png';

const Feature = () => {
  return (
    <section>
      <div className='container' style={{ margin: '3.5rem auto' }}>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='featured_heading'>We are Featured</div>
            <div className='featured_primary'>What they say</div>
            <div className='button_wrapper'>
              <BtnLink color='black' location='/' name='Explore All' />
            </div>
          </div>
          <div className='col-lg-8 featured-container'>
            <div className='image_container'>
              <img src={img1} alt='' />
            </div>
            <div className='image_container '>
              <img src={img2} alt='' />
            </div>
            <div className='image_container '>
              <img src={img3} alt='' />
            </div>
            <div className='image_container '>
              <img src={img4} alt='' />
            </div>
            <div className='image_container '>
              <img src={img5} alt='' />
            </div>
            <div className='image_container'>
              <img src={img6} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div
        className='blog_button_wrapper'
        style={{
          textAlign: 'center',
          fontSize: `2rem`,
          marginBottom: '1.5rem',
          color: '#222',
        }}
      >
        @ALBERTOTORRESI
      </div>
      <InstaPics />
    </section>
  );
};

export default Feature;
