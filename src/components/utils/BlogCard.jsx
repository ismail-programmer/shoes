import React from 'react';

const BlogCard = () => {
  return (
    <div className="blog_card">
      <div className="image_wrapper">
        <img src="https://cdn.shopify.com/s/files/1/0753/2615/files/Gurmeet-Choudhary-in-Alberto--Torresi-shoes-_1.png?4712" alt=""/>
      </div>
      <div className="content_blog">
        <div className="date_blog">
          January 12,1990
        </div>
        <hr/>
        <div className="blog_title">
          CELEBS In <b>ALBERT LORRESI</b>
        </div>
        <div className="blog_content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam odit consectetur, ratione possimus aliquam ea velit mollitia quos? Dolorem quibusdam odit consectetur, ratione possimus aliquam ea velit mollitia quos? 
        </div>
        <div className="blog_button_wrapper">
          <button>Read More >></button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;