import React from 'react';
// import sprite from '../public/svg/sprite.svg';
import Link from 'next/link';
import { useMediaQuery } from '../utils/ScreenWidth';
function Services(props) {
  const mediaQuery = useMediaQuery(560);

  return (
    <section className='services'>
      <div className='service__header'>
        <h2 className='service__header--heading'>Our Services</h2>
      </div>
      <p className='service__header--secondary'>
        We offer all services related to web development and will ensure all
        your ideas are realized.
      </p>
      <div className='service'>
        <Link href='/services#modern'>
          <div
            style={{ textDecoration: 'none' }}
            href='/services#modern'
            className=' service__item'
          >
            <svg className='service__icon'>
              {/* <use href={sprite + '#ux-design'}></use> */}
            </svg>
            <div className='heading-4__section'>
              <h4 className='heading-4'>Modern UI/UX Design</h4>
            </div>
            {!mediaQuery ? (
              <div className='service__item__hover-gradient'>
                <p className='service__item__text'>
                  Get the professional site you've always wanted.
                </p>
                <a
                  className='service__item__button'
                  style={{ textDecoration: 'none' }}
                >
                  <p className='service__button-text'>Learn More</p>
                </a>
              </div>
            ) : (
              <p className='service__item__text'>
                Get the professional site you've always wanted.
              </p>
            )}
          </div>
        </Link>

        <div
          style={{ textDecoration: 'none' }}
          href='/services#responsive'
          className=' service__item'
        >
          <svg className='service__icon'>
            {/* <use href={sprite + '#coding'}></use> */}
          </svg>
          <div className='heading-4__section'>
            <h4 className='heading-4'>Responsive Design</h4>
          </div>
          {!mediaQuery ? (
            <Link href='/services#responsive'>
              <div className='service__item__hover-gradient'>
                <p className='service__item__text'>
                  Your website, looking great, on any device.
                </p>
                <a
                  className='service__item__button'
                  style={{ textDecoration: 'none' }}
                >
                  <p className='service__button-text'>Learn More</p>
                </a>
              </div>
            </Link>
          ) : (
            <Link href='/services#responsive'>
              <p className='service__item__text'>
                Your website, looking great, on any device.
              </p>
            </Link>
          )}
        </div>

        <div
          style={{ textDecoration: 'none' }}
          href='/services#profit'
          className=' service__item'
        >
          <svg className='service__icon'>
            {/* <use href={sprite + '#ecommerce'}></use> */}
          </svg>
          <div className='heading-4__section'>
            <h4 className='heading-4'>Profit Online</h4>
          </div>
          {!mediaQuery ? (
            <div className='service__item__hover-gradient'>
              <p className='service__item__text'>
                Get your customers shopping on your site, safely and securely.
              </p>
              <Link href='/services#profit'>
                <a
                  className='service__item__button'
                  style={{ textDecoration: 'none' }}
                >
                  <p className='service__button-text'>Learn More</p>
                </a>
              </Link>
            </div>
          ) : (
            <p className='service__item__text'>
              Get your customers shopping you your site today.
            </p>
          )}
        </div>

        <div
          style={{ textDecoration: 'none' }}
          href='/services#customized'
          className=' service__item'
        >
          <svg className='service__icon'>
            {/* <use href={sprite + '#dashboard'}></use> */}
          </svg>
          <div className='heading-4__section'>
            <h4 className='heading-4'>Customized Systems</h4>
          </div>
          {!mediaQuery ? (
            <Link href='/services#customized'>
              <div className='service__item__hover-gradient'>
                <p className='service__item__text'>
                  Create a custom system for your business.
                </p>
                <a
                  style={{ textDecoration: 'none' }}
                  className='service__item__button'
                >
                  <p className='service__button-text'>Learn More</p>
                </a>
              </div>
            </Link>
          ) : (
            <p className='service__item__text'>
              Create custom systems and optimize your business.
            </p>
          )}
        </div>

        <div
          style={{ textDecoration: 'none' }}
          href='/services#technology'
          className=' service__item'
        >
          <svg className='service__icon'>
            {/* <use href={sprite + '#api'}></use> */}
          </svg>
          <div className='heading-4__section'>
            <h4 className='heading-4'>Technology Integration</h4>
          </div>
          {!mediaQuery ? (
            <Link href='/services#technology'>
              <div className='service__item__hover-gradient'>
                <p className='service__item__text'>
                  Combine technologies to improve your users experiences.
                </p>
                <a
                  style={{ textDecoration: 'none' }}
                  className='service__item__button'
                >
                  <p className='service__button-text'>Learn More</p>
                </a>
              </div>
            </Link>
          ) : (
            <p className='service__item__text'>
              Combine technologies, improve your site.
            </p>
          )}
        </div>

        <div
          style={{ textDecoration: 'none' }}
          href='/services#flexibility'
          className=' service__item'
        >
          <svg
            className='service__icon service-icon--modified'
            style={{
              opacity: '.7',
              marginRight: '8rem',
              marginBottom: !mediaQuery ? '4rem' : '5rem',
            }}
          >
            {/* <use href={sprite + '#android'}></use> */}
          </svg>
          <svg
            className='service__icon service-icon--modified'
            style={{
              opacity: '.8',
              marginLeft: '10rem',
              marginTop: !mediaQuery ? '4rem' : '2.5rem',
              fill: '#bd80e1',
            }}
          >
            {/* <use href={sprite + '#apple'}></use> */}
          </svg>
          <div className='heading-4__section'>
            <h4 className='heading-4'>Mobile Flexibility</h4>
          </div>
          {!mediaQuery ? (
            <Link href='/services#flexibility'>
              <div className='service__item__hover-gradient'>
                <p className='service__item__text'>
                  Save the expense of building two applications!
                </p>

                <a
                  style={{ textDecoration: 'none' }}
                  className='service__item__button'
                >
                  <p className='service__button-text'>Learn More</p>
                </a>
              </div>
            </Link>
          ) : (
            <p className='service__item__text service__item__text--twoIcons '>
              Save the expense of building two applications!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Services;
// fix footer
