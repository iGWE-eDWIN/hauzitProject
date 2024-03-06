import React from 'react';

import Banner from '../components/Banner';
import Tab from '../components/tab';
import Explore from '../components/Explore';
import Tab2 from '../components/tab2';

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <Tab />
      <Explore />
      <Tab2 />
    </div>
  );
};

export default Home;
