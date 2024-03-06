import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IoHeartOutline } from 'react-icons/io5';

const Card = ({
  text,
  ash,

  t,
  title,
  expression,
  expression2,
  Baths,
  Beds,
  logic,
}) => {
  const rec_container = t
    ? ash
      ? 'ash-title-container'
      : 'p-title-container'
    : 'green-title-container';

  return (
    <div className='card-container'>
      <div className='card-title'>
        <div className={rec_container}>
          <h7 className='title-text'>{text}</h7>
        </div>
        <div className='card-icon-container'>
          <IoIosArrowBack className='backward-icon' />
          <IoIosArrowForward className=' forward-icon' />
        </div>
        <div className='card-indicator-container'>
          <div className='card-dot'></div>
          <div className='card-ellipse-dot'></div>
          <div className='card-ellipse-dot'></div>
          <div className='card-ellipse-dot'></div>
          <div className='card-ellipse-dot'></div>
        </div>
      </div>
      <div className='card-content'>
        <div className='heading-container'>
          <h7 className='card-content-heading'>{title}</h7>
          <IoHeartOutline className='card-content-love-icon' />
        </div>
        <div className='card-content-amount-container'>
          <h6 className='card-content-amount'>N500,000,000</h6>
        </div>
        <div className='card-content-paragraph-container'>
          <p className='card-paragraph'>
            <span>
              <span className='spacing1'>{expression}</span>
              <span className='spacing2'>{Beds}</span>
            </span>
            |
            {expression2 && (
              <span className='spacing3'>
                <span className='spacing4'>{expression2}</span>
                {Baths}
              </span>
            )}
            {logic}
            <span className='spacing5'>1.87k </span>
            <span className='spacing6'>Sq Ft</span> |
            <span className='spacing7'>For sale</span>
          </p>
          <p className='card-paragraph2'>
            1333 Jones St. Choba, Port Harcourt, Rivers
          </p>
          <p className='card-paragraph3'>
            Listing by Nest Seekers International
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
