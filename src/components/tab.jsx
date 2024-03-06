import React from 'react';
import image1 from '../images/undraw_at_home_octe 1.png';
import image2 from '../images/undraw_coming_home_-52-ir 1.png';
import image3 from '../images/undraw_for_sale_re_egkk 1.png';

const Tab = () => {
  return (
    <div className='container-fluid tab-container'>
      <div className='text-tab-container'>
        <h4 className='text-Hauzit'>See how Hauzit can help</h4>
      </div>
      <div className='container'>
        <div className='tab'>
          <img src={image1} alt='buy' className='tab1-image' />
          <h4 className='title'>Buy</h4>
          <p className='text-description'>
            <span>With hundreds of properties for sale available</span>
            <br></br>
            <span>on the website, Hauzit can match you with a</span>
            <br></br>
            <span>property you'll love to call home.</span>
          </p>
          <div className='search-property-container'>
            <p className='text-search-property'>Search properties</p>
          </div>
        </div>
        <div className='tab2'>
          <img src={image2} alt='Rent' className='tab2-image' />
          <h4 className='title'>Rent</h4>
          <p className='text-description'>
            <span>With an immersive & videos experiene</span>
            <br></br>
            <span>and the most listing, Hauzi can help you find a</span>
            <br></br>
            <span>property you'll love.</span>
          </p>
          <div className='search-property-container-2'>
            <p className='text-search-property'>Search rentals</p>
          </div>
        </div>
        <div className='tab'>
          <img src={image3} alt='Sell' className='tab3-image' />
          <h4 className='title'>Sell</h4>
          <p className='text-description'>
            <span>No matter what path you take to sell your</span>
            <br></br>
            <span>property, we can help you navigate a</span>
            <br></br>
            <span>successful sale.</span>
          </p>
          <div className='search-property-container'>
            <p className='text-search-property'>See your options</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
