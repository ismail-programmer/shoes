import React from 'react';

import blogPerson0Img from '../../resources/images/blog-person-0.png';

const BlogCard = () => {
  return (
    <div className='blog_card row'>
      <div className='image_wrapper col-sm-5'>
        <img src={blogPerson0Img} className='img-responsive' alt='' />
      </div>
      <div className='content_blog col-sm-7'>
        <div className='date_blog'>January 12,1990</div>
        <div className='blog_title'>
          CELEBS In <b>ALBERT LORRESI</b>
        </div>
        <div className='blog_content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          quibusdam odit consectetur, ratione possimus aliquam ea velit mollitia
          quos? Dolorem quibusdam odit consectetur, ratione possimus aliquam ea
          velit mollitia quos?
        </div>
        <div className='blog_button_wrapper'>
          <button>Read More >></button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
