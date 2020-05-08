import React from "react";
import BtnLink from "./BtnLink";

const DetailCard = ({ text, shoeType,bgImage,myClass }) => {
  return (
    <div className={`detail_wrapper ${myClass}`} style={{backgroundImage: bgImage}}>
      <div className="content">
        <div className="cheering_text">{text}</div>
        <div className="shoe_type">{shoeType}</div>
        <div className="btn_wrapper">
          <BtnLink location="/" name="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
