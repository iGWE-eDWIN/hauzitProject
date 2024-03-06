import React from 'react';
import HP_Float from '../images/hpFloat.png';
import Card from './Card';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const Tab2 = () => {
  return (
    <div className='container-fluid tab2-container'>
      <div className='tab2-rec'>
        <h6 className='tab2-text'>New to market</h6>
        <div className='group-container'>
          <Card
            text='New Listing'
            ash={true}
            width={true}
            t={true}
            title='3 Bedroom duplex for sale'
            expression={3}
            expression2={2}
            Beds='Beds'
            Baths='Baths'
            logic='|'
          />
          <Card
            text='Hot'
            t={true}
            title='Land for sale'
            expression={4}
            Beds='Plots'
          />
          <Card
            text='Coming soon'
            title='Warehouse for sale'
            expression='-'
            expression2='-'
            Beds='Beds'
            Baths='Baths'
            logic='|'
          />
          <div className='half-card-container'>
            <div className='half-card-title'>
              <IoIosArrowBack className='backward-icon-style' />
            </div>
            <div className='card-content'>
              <div className='half-heading-container'>
                <h7 className='card-content-heading'>Event Venue for sal</h7>
              </div>
              <div className='card-content-amount-container'>
                <h6 className='card-content-amount'>N500,000,000</h6>
              </div>
              <p className='card-paragraph'>
                <span>
                  <span className='spacing1'>-</span>
                  <span className='spacing2'>Beds</span>|
                  <span className='spacing3'>
                    <span className='spacing4'>3</span>
                    Baths
                  </span>
                </span>
              </p>
              <p className='card-paragraph2'>1333 Jones St. Choba</p>
              <p className='card-paragraph3'>LListing by Nest Seekers</p>
            </div>
          </div>
          <div className='card-nav-container'>
            <IoIosArrowForward className='forward-nav' />
          </div>
        </div>
      </div>
      <img src={HP_Float} alt='HP_float' className='Hp-float' />
    </div>
  );
};

export default Tab2;
