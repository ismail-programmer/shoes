import React from 'react';

const Artisan = () => {
  return (
    <section className="artisans">
      <div className="heading_login" style={{textTransform: `uppercase`}}>From Artisans to You</div>
      <p style={{maxWidth: `400px`,margin: `0 auto`,textAlign:`center`}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus expedita magnam consectetur ratione ut, neque tempora obcaecati esse ad?</p>
      <div className="blog_button_wrapper">
        <button className="button" style={{textTransform: `uppercase`,["--color"]: "black"}}>Discover Now</button>
      </div>
    </section>
  );
};

export default Artisan;