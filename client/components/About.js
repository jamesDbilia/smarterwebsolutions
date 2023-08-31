import React from 'react';
import happyCustomer from '../public/img/pledge.jpg';
import happyCustomerSmall from '../public/img/pledgeSmall.jpg';
import happyCustomerweb from '../public/img/pledge.webp';
import happyCustomerwebSmall from '../public/img/pledgeSmall.webp';
function About(props) {
  return (
    <div className='about'>
      <h2 className='about__heading'>Our Pledge</h2>
      <p className='about__text'>
        It is our belief as web design experts that every company, no matter the
        size deserves a website they are proud of at a price they can afford.
        Our #1 commitment is customer satisfaction and we pledge to ensure you
        are 100% satisfied with the result. Whether you are looking for a web
        application, e-commerce site or mobile site design we are the web
        development company for you.
      </p>

      <picture className='about__img'>
        <source
          srcSet={`${happyCustomerwebSmall} 600w, ${happyCustomerweb}`}
          type='image/webp'
        />
        <source
          srcSet={`${happyCustomer} 600w, ${happyCustomerSmall}`}
          type='image/jpeg'
        />
        <img
          src={happyCustomer}
          alt='First slide'
          className='about__img'
          loading='lazy'
        />
      </picture>
    </div>
  );
}

export default About;
