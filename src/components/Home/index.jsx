import React from 'react';
import Genders from './Genders';
import Products from './Products';
import ShoeTypes from './ShoeTypes';
import Carousel from './Carousel';
import LifeStyle from './LifeStyle';
import Celebrities from './Celebrities';
import Reviews from './Reviews';
import Blog from './Blog';
import Feature from './Feature';
import Artisan from './Artisans';
import Quality from './Quality';
const Home = () => {
  return (
    <div>
      <Genders />
      <Quality />
      <Products active="Men" />
      <ShoeTypes />
      <Carousel />
      <LifeStyle />
      <Products active="Women" />
      <ShoeTypes />
      <Artisan/>
      <Celebrities/>
      <Reviews />
      <Blog />
      <Feature />
    </div>
  );
};

export default Home;