import React from 'react';
import BlogCard from '../utils/BlogCard';
import BtnLink from '../utils/BtnLink';

const Blog = () => {
  return (
    <div>
        <div className="row blog_row">
          <div className="col-lg-7 col-md-9 col-sm-12">
            <BlogCard />
            <hr/>
            <BlogCard />
          </div>
          <div className="col-lg-5 col-md-3 fashion_blog col-sm-12">
            <div className="content_heading">
              Latest <b>News</b> from the <b>Fashion</b> blog
            </div>
            <div className="content_primary">
              Stay in touch with recent events
            </div>
            <div className="button_wrapper">
              <BtnLink width="auto" color="black" location="/" name="Discover More" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Blog;