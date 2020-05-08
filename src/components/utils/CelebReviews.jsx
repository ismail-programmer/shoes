import React from 'react';
import Card from './Card';

const CelebReviews = () => {
  return (
    <div className="cleb_review">
      <div className="content_box">
        <h2>Shop This Look</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nobis voluptatibus maiores fuga magni, non sint rerum ipsam ipsa architecto excepturi vel nihil cumque, praesentium iure iusto aspernatur quidem laboriosam.</p>
      </div>
      <div className="celeb_card_wrapper">
        <Card />
      </div>
      <div className="img_outer">
        <img src="https://cdn.shopify.com/s/files/1/0753/2615/files/ayushman_khurana.jpg?2914" alt="abbc"/>
      </div>
      
    </div>
  );
};

export default CelebReviews;