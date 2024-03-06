import React from 'react';
import { IoSearch } from 'react-icons/io5';
// import '../../public/css/banner.css';
import Home_cover from '../images/cover-home.jpg';

const Banner = () => {
  const styles = {
    home: {
      backgroundImage: `url(${Home_cover})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',

      objectFit: 'cover',
    },
  };
  return (
    <div className='container-fluid banner-container' style={styles.home}>
      <div className='banner'>
        <div className='text-container'>
          <h1 className='text-find-place'>FIND YOUR PLACE</h1>
        </div>
        <form className='input-container'>
          <input
            className='input-style'
            placeholder='Enter state, city, address or neighbourhood'
          />
          <div className='search-container'>
            <IoSearch className='vector-icon' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
