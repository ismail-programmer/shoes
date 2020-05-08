import React from 'react';
import { Link } from 'react-router-dom';

const Genders = () => {
  return (
    <section className="genders">
      <div className="gender_wrapper">
        <div className="gents gender_section">
          <Link to="/">Mens</Link>
        </div>
        <div className="ladies gender_section">
          <Link to="/">Womens</Link>
        </div>
      </div>
    </section>
  );
};

export default Genders;