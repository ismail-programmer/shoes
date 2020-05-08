import React from 'react';

import Price from '../utils/Price';

const HeaderOffer = () => (
  <div className='header-offer'>
    <div className='enquiries'>Retailers/B2B Enquiries</div>
    <div className='shipping-offer'>
      Free shipping on all orders above <Price value={1499} /> |{' '}
      <b>TRACK ORDER</b>
    </div>
    <div className='contacts'>
      <i class='fas fa-mobile-alt' />
      &nbsp; Download App &nbsp; | &nbsp; <i class='fas fa-phone-alt'></i>{' '}
      &nbsp; | &nbsp; <i class='far fa-envelope'></i>
    </div>
  </div>
);

export default HeaderOffer;
