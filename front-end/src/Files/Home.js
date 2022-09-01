import React from 'react';


import Poster from '../Components.js/Poster';
import HouseList from '../Components.js/HouseList';

const Home = () => {
  return (
    <div className='min-h-[1000px] '>
      <Poster/>
      <HouseList />
    </div>
  );
};

export default Home;