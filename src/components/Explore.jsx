import React from 'react';
import imagePh from '../images/ph.jpg';
import imageLag from '../images/lagos.jpg';
import imageAbj from '../images/fct.png';
import imageOwerri from '../images/owerri.png';
import imageKano from '../images/kano.png';
import { IoIosArrowForward } from 'react-icons/io';

const Explore = () => {
  const styles = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',

      objectFit: 'cover',
    };
  };

  return (
    <div className='container-fluid explore-container'>
      <h4 className='explore-heading'>Explore properties on Hauzit</h4>
      <p className='explore-paragraph'>
        Take a deep dive and browse properties for sale, original photos,
        videos, and local insights to find what is right for you.
      </p>
      <div className='explore-stateContainer'>
        <div className='explore-ph' style={styles(imagePh)}>
          <div>
            <h5 className='text-pH'>Port Harcourt</h5>
          </div>
          <div className='rec-ph'>
            <p className='rec-ph-text'>View listings</p>{' '}
            <IoIosArrowForward className='rec-ph-icon' />
          </div>
        </div>
        <div className='explore-city' style={styles(imageLag)}>
          <div>
            <h5 className='title-city'>Lagos</h5>
          </div>
          <div>
            <h6 className='text-city'>Coming Soon...</h6>
          </div>
        </div>
        <div className='explore-city' style={styles(imageAbj)}>
          <div>
            <h5 className='title-city'>Abuja</h5>
          </div>
          <div>
            <h6 className='text-city'>Coming Soon...</h6>
          </div>
        </div>
        <div className='explore-city' style={styles(imageOwerri)}>
          <div>
            <h5 className='title-city'>Owerri</h5>
          </div>
          <div>
            <h6 className='text-city'>Coming Soon...</h6>
          </div>
        </div>
        <div className='explore-city' style={styles(imageKano)}>
          <div>
            <h5 className='title-city'>Kano</h5>
          </div>
          <div style={{ position: 'relative' }}>
            <h6 className='text-city'>Coming Soon...</h6>
            <div className='explore-ellipse'>
              <IoIosArrowForward className='explore-vector' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
