import React from 'react';
import Image from 'next/image'

import MoneytrackerImage from '../public/img/svg/grivetyImage4.svg';
import GrivetyLogo from '../public/img/svg/grivetylogo-1.svg';
import Link from 'next/link';

function Grivety(props) {
  return (
    <>
      <GrivetyLogo
        className='portfolio__company-logo'
        alt='grivety logo'
      />
      <p className='portfolio__description'>
        Grivety is a modern banking web application that displays the power of
        using a database in unison with your web server. Grivety displays data
        in every imaginable...{' '}
        <Link href='/grivety'>
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
      </p>{' '}
      <div className='portfolio__image-section'>
        <MoneytrackerImage
          alt='grivety Screenshot'
          className='portfolio__image portfolio__image--grivety'
        />
      </div>
    </>
  );
}

export default Grivety;
