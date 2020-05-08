import React from "react";
import DetailCard from "../utils/DetailCard";

const ShoeTypes = () => {
  return (
    <section className="shoe_section_wrapper">
      <div className="shoe_section">
        <DetailCard text="To Suit any Occasion" shoeType="Boots" />
        <DetailCard text="Trending Now" shoeType="Formal Shoes" />
        <DetailCard text="Trending Now" shoeType="Formal Shoes" />
      </div>
    </section>
  );
};

export default ShoeTypes;
