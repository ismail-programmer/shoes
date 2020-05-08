import React, { Fragment } from 'react';
import numeral from 'numeral';

const Price = ({ value, currency }) => (
  <Fragment>
    {currency} {numeral(value).format('0,0')}
  </Fragment>
);

Price.defaultProps = {
  currency: '₹',
};

export default Price;
