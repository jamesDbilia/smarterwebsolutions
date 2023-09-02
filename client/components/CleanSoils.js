import React from 'react';
import CleanSoilsSVG from '../public/svg/cleanSoils.svg';
import CleanSoils1 from '../public/img/cleanSoils2.png';
import CleanSoils1Small from '../public/img/cleanSoils2Small.png';
import CleanSoils1Web from '../public/img/cleanSoils2.webp';
import CleanSoils1SmallWeb from '../public/img/cleanSoils2Small.webp';
import CleanSoils from '../public/img/cleanSoils1.png';
import CleanSoilsSmall from '../public/img/cleanSoils1Small.png';
import CleanSoilsWeb from '../public/img/cleanSoils1.webp';
import CleanSoilsSmallWeb from '../public/img/cleanSoils1Small.webp';
import Link from 'next/link';
import Image from 'next/image'
function CleanSoilsComponent(props) {
  return (
    <>
      <CleanSoilsSVG className='portfolio__company-logo'/>   
      <p className='portfolio__description'>
        Clean Soils wanted to build a modern website to rival their competitors.
        The minimalistic animation effects and sharp design provide users with a
        exceptional experience and...{' '}
        <Link href='/cleanSoils'>
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
            srcSet={`${CleanSoils1SmallWeb} 600w, ${CleanSoils1Web}`}
            type='image/webp'
          />
          <source
            srcSet={`${CleanSoils1} 600w, ${CleanSoils1Small}`}
            type='image/jpeg'
          />
          <Image 
            src={CleanSoils1}
            alt='CleanSoils Screenshot'
            className='portfolio__image portfolio__image--1'
            loading='lazy'
          />
        </picture>
        <picture className='portfolio__image-picture '>
          <source
            srcSet={`${CleanSoilsSmallWeb} 600w, ${CleanSoilsWeb}`}
            type='image/webp'
          />
          <source
            srcSet={`${CleanSoils} 600w, ${CleanSoilsSmall}`}
            type='image/jpeg'
          />
          <Image 
            src={CleanSoils}
            alt='CleanSoils Screenshot'
            className='portfolio__image portfolio__image--2'
            loading='lazy'
          />
        </picture>
      </div>
    </>
  );
}

export default CleanSoilsComponent;
