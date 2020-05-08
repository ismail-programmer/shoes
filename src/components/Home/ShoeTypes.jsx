import React from 'react';
import DetailCard from '../utils/DetailCard';

import classicFormalShoesImg from '../../resources/images/classic-formal-shoes.png';
import anyOccasionBootsImg from '../../resources/images/any-occasion-boots.png';
import weekendCasualShoesImg from '../../resources/images/weekend-casual-shoes.png';

const ShoeTypes = () => {
  return (
    <section className='shoe_section_wrapper'>
      <div className='shoe_section'>
        <DetailCard
          text='To Suit any Occasion'
          text='Classic'
          shoeType='Formal Shoes'
          bgImage={classicFormalShoesImg}
        />
        <DetailCard
          text='To Suit Any Occasion'
          shoeType='Boots'
          bgImage={anyOccasionBootsImg}
        />
        <DetailCard
          text='Something for the Weekend'
          shoeType='Casual Shoes'
          bgImage={weekendCasualShoesImg}
        />
      </div>
    </section>
  );
};

export default ShoeTypes;
