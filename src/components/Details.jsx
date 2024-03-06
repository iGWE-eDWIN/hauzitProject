import React from 'react';

const Details = ({ title, text1, text2, text3, text4, text5 }) => {
  const className = text5 ? 'footer-list-container' : 'footer-list-container2';
  return (
    <div className='sec2'>
      <h6 className='footer-list-title'>{title}</h6>
      <div className={className}>
        <p className='footer-list-text'>{text1}</p>
        <p className='footer-list-text'>{text2}</p>
        <p className='footer-list-text'>{text3}</p>
        <p className='footer-list-text'>{text4}</p>
        {text5 && <p className='footer-list-text'>{text5}</p>}
      </div>
    </div>
  );
};

export default Details;
