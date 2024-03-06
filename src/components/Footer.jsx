import React from 'react';
import { FaApple } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa';
import Logo from '../images/logo1.png';
import { MdCopyright } from 'react-icons/md';
import Details from './Details';
import { IoLogoTwitter } from 'react-icons/io';
import { FaYoutube } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='container-fluid footer-container'>
      <div className='footer-section1'>
        <div className='footer-text-container'>
          <h6 className='footer-heading'>Download the Hauzit app</h6>
        </div>
        <p className='footer-text'>
          Don’t miss out on the right property for you — browse up-to-date
          listings, refine your search and more from our mobile app
        </p>
        <div className='footer-icon-container'>
          <div className='ios-android-container'>
            <FaApple className='ios-icon' />
            <div className='icon-text-container'>
              <p className='icon-text'>Download on the</p>
              <h7 className='icon-title'>App Store</h7>
            </div>
          </div>
          <div className='ios-android-container'>
            <FaGooglePlay className='android-icon' />
            <div className='icon-text-container'>
              <p className='icon-text'>Download it on</p>
              <h7 className='icon-title'>Google Play</h7>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-section2'>
        <div className='sec1'>
          <div className='footer-logo-container'>
            <img src={Logo} alt='logo' className='footer-logo' />
            <h4 className='footer-huazit'>HAUZIT</h4>
          </div>
          <div className='footer-vector-container'>
            <MdCopyright className='footer-copyright-icon' />
            <p className='footer-copyright-text'>
              2023 Hauzit. All rights reserved
            </p>
          </div>
        </div>
        <div className='secT'>
          <Details
            title='Explore'
            text1='Buy'
            text2='Rent'
            text3='Sell'
            text4='Mortage'
            text5='Professionals'
          />

          <Details
            title='Community'
            text1='List rentals'
            text2='Work with us'
            text3='Support'
            text4='Blog'
            text5='Terms of use'
          />
          <Details
            title='Company'
            text1='About us'
            text2='Contact'
            text3='Privacy Policy'
            text4='Careers'
          />
          <div className='sec5'>
            <h6 className='footer-list-title2'>Connect with us</h6>
            <div className='social-icons'>
              <IoLogoTwitter className='twitter-icon' />
              <FaYoutube className='youtube-icon' />
              <FaInstagram className='insta-icon' />
              <FaTiktok className='tikto-icon' />
              <FaLinkedin className='linken-icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
