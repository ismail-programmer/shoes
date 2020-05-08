import React from 'react';
import Price from '../utils/Price';

const Card = ({ image, title, oldPrice, newPrice }) => {
  return (
    <div className='card'>
      <div className='card_image_wrapper'>
        <img src={image} alt='abc' className='card_image' />
      </div>
      <div className='card_content'>
        <div className='company_name_card'>Alberto Torresi</div>
        <div className='card_title'>{title}</div>
        <div className='old_price'>
          <Price value={oldPrice} />
        </div>
        <div className='new_price'>
          <Price value={newPrice} />
        </div>
      </div>
    </div>
  );
};

export default Card;
