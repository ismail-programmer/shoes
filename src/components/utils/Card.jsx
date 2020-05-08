import React from 'react';
import img from "../../resources/images/ALBERTO_TORRESI_MEN_S_HOBBART_COGNAC_FORMAL_LACE_UP_SHOES_largea6c9.jpg"
const Card = () => {
  return (
    <div className="card">
      <div className="card_image_wrapper">
        <img src={img} alt="abc" className="card_image"/>
      </div>
      <div className="card_content">
        <div className="company_name_card">
          Alberto Torresi
        </div>
        <div className="card_title">
          Black Boots
        </div>
        <div className="old_price">
          1,000
        </div>
        <div className="new_price">
          10,000
        </div>
      </div>
    </div>
  );
};

export default Card;