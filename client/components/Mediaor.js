import React from 'react';
import mediaor from '../public/img/svg/mediaor.svg';
import mediaorImage1 from '../public/img/mediaorImage1.png';
import mediaorImage1Small from '../public/img/mediaorImage1Small.png';
import mediaorImage2 from '../public/img/mediaorImage2.png';
import mediaorImage2Small from '../public/img/mediaorImage2Small.png';
import mediaorImageweb1 from '../public/img/mediaorImage1.webp';
import mediaorImagewebSmall1 from '../public/img/mediaorImage1Small.webp';
import mediaorImageweb2 from '../public/img/mediaorImage2.webp';
import mediaorImageweb2Small from '../public/img/mediaorImage1Small.webp';
import Link from 'next/link';
function Mediaor(props) {
  return (
    <>
      <img
        className='portfolio__company-logo portfolio__company-logo--mediaor'
        src={mediaor}
        alt='mediaor'
      />
      <p className='portfolio__description'>
        Mediaor represents the modern company looking to attract new young
        clientele with attractive and captivating styles within the website. The
        use of photo galleries, icons and...{' '}
        <Link href='/mediaor'>
          <span
            style={{
              textDecoration: 'none',
              color: '#5db9f7',
              cursor: 'pointer',
            }}
          >
            Learn More
          </span>
        </Link>
      </p>
      <div className='portfolio__image-section'>
        <picture className='portfolio__image-picture '>
          <source
            srcSet={`${mediaorImagewebSmall1} 600w, ${mediaorImageweb1}`}
            type='image/webp'
          />
          <source
            srcSet={`${mediaorImage1} 600w, ${mediaorImage1Small}`}
            type='image/jpeg'
          />
          <img
            src={mediaorImage1}
            alt='Mediaor Screenshot'
            className='portfolio__image--mediaor'
            loading='lazy'
          />
        </picture>
        <picture className='portfolio__image-picture '>
          <source
            srcSet={`${mediaorImageweb2Small} 600w, ${mediaorImageweb2}`}
            type='image/webp'
          />
          <source
            srcSet={`${mediaorImage2} 600w, ${mediaorImage2Small}`}
            type='image/jpeg'
          />
          <img
            src={mediaorImage2}
            alt='Mediaor Screenshot'
            className=' portfolio__image--mediaor portfolio__image--mediaor--1'
            loading='lazy'
          />
        </picture>
      </div>
    </>
  );
}

export default Mediaor;
