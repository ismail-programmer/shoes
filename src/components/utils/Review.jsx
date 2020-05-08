import React from "react";

const Review = () => {
  return (
    <div className="container">
      <div className="review">
        <div className="img_container">
          <img
            src="https://cdn.shopify.com/s/files/1/0753/2615/files/Alberto-Torresi-Coverage_Cosmopolitan-India_s-Post.jpg?v=1578307326"
            width="150"
            height="150"
            alt="abc"
          />
        </div>
        <div className="review_outer">
          <div className="review_inner">
            <div className="review_heading">A Happy Customer</div>
            <q>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum
              dolor sit amet, consectetur adipisicing elit.
            </q>
            <div className="name">Adeeb Ahmad</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
