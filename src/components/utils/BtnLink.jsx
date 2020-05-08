import React from 'react';
import { Link } from 'react-router-dom';

const BtnLink = ({name,location,color,width}) => {
  return (
    <Link to={location} style={{['--color'] : color || "white",width: width}} className="button">
      {name}
    </Link>
  );
};

export default BtnLink;