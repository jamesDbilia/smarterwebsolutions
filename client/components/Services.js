import React from 'react';
import Link from 'next/link';
import { useMediaQuery } from '../utils/ScreenWidth';
import ModernIcon from '../public/svg/ux-design.svg';
import ResponsiveIcon from '../public/svg/coding.svg';
import ProfitIcon from '../public/svg/ecommerce.svg';
import CustomizedIcon from '../public/svg/dashboard.svg';
import TechnologyIcon from '../public/svg/api.svg';
import MobileFlexibilityIcon1 from '../public/svg/android.svg';
import MobileFlexibilityIcon2 from '../public/svg/apple.svg';

function Services(props) {
  const mediaQuery = true

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
            <ModernIcon className='service__icon' />
            <div className='heading-4__section'>
              <h4 className='heading-4'>Modern UI/UX Design</h4>
            </div>
            {!mediaQuery ? (
              <div className='service__item__hover-gradient'>
                <p className='service__item__text'>
                  Get the professional site you've always wanted.
                </p>
                <li
                  className='service__item__button'
                  style={{ textDecoration: 'none' }}
                >
                  <p className='service__button-text'>Learn More</p>
                </li>
              </div>
            ) : (
              <p className='service__item__text'>
                Get the professional site you've always wanted.
              </p>
            )}
          </div>
        </Link>

        <Link href='/services#responsive'>
          <div
            style={{ textDecoration: 'none' }}
            href='/services#responsive'
            className=' service__item'
          >
            <ResponsiveIcon className='service__icon' />
            <div className='heading-4__section'>
              <h4 className='heading-4'>Responsive Design</h4>
            </div>
            {!mediaQuery ? (
              <div className='service__item__hover-gradient'>
                <p className='service__item__text'>
                  Your website, looking great, on any device.
                </p>
                <li
                  className='service__item__button'
                  style={{ textDecoration: 'none' }}
                >
                  <p className='service__button-text'>Learn More</p>
                </li>
              </div>
            ) : (
              <p className='service__item__text'>
                Your website, looking great, on any device.
              </p>
            )}
          </div>
        </Link>

        <div
          style={{ textDecoration: 'none' }}
          href='/services#profit'
          className=' service__item'
        >
          <ProfitIcon className='service__icon' />
          <div className='heading-4__section'>
            <h4 className='heading-4'>Profit Online</h4>
          </div>
          {!mediaQuery ? (
            <div className='service__item__hover-gradient'>
              <p className='service__item__text'>
                Get your customers shopping on your site, safely and securely.
              </p>
              <Link href='/services#profit'>
                <li
                  className='service__item__button'
                  style={{ textDecoration: 'none' }}
                >
                  <p className='service__button-text'>Learn More</p>
                </li>
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
          <CustomizedIcon className='service__icon' />
          <div className='heading-4__section'>
            <h4 className='heading-4'>Customized Systems</h4>
          </div>
          {!mediaQuery ? (
            <Link href='/services#customized'>
              <div className='service__item__hover-gradient'>
                <p className='service__item__text'>
                  Create a custom system for your business.
                </p>
                <li
                  style={{ textDecoration: 'none' }}
                  className='service__item__button'
                >
                  <p className='service__button-text'>Learn More</p>
                </li>
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
          <TechnologyIcon className='service__icon' />
          <div className='heading-4__section'>
            <h4 className='heading-4'>Technology Integration</h4>
          </div>
          {!mediaQuery ? (
            <Link href='/services#technology'>
              <div className='service__item__hover-gradient'>
                <p className='service__item__text'>
                  Combine technologies to improve your users experiences.
                </p>
                <li
                  style={{ textDecoration: 'none' }}
                  className='service__item__button'
                >
                  <p className='service__button-text'>Learn More</p>
                </li>
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
          <MobileFlexibilityIcon1 className='service__icon service-icon--modified' style={{ opacity: '.7', marginRight: '8rem', marginBottom: !mediaQuery ? '4rem' : '5rem' }} />
          <MobileFlexibilityIcon2 className='service__icon service-icon--modified' style={{ opacity: '.8', marginLeft: '10rem', marginTop: !mediaQuery ? '4rem' : '2.5rem', fill: '#bd80e1' }} />
          <div className='heading-4__section'>
            <h4 className='heading-4'>Mobile Flexibility</h4>
          </div>
          {!mediaQuery ? (
            <Link href='/services#flexibility'>
              <div className='service__item__hover-gradient'>
                <p className='service__item__text'>
                  Save the expense of building two applications!
                </p>

                <li
                  style={{ textDecoration: 'none' }}
                  className='service__item__button'
                >
                  <p className='service__button-text'>Learn More</p>
                </li>
              </div>
            </Link>
          ) : (
            <p className='service__item__text service__item__text--twoIcons '>
              Save the expense of building two applications!
            </p>
          )}
        </div>
        {/* Similar modifications for other sections */}
      </div>
    </section>
  );
}

export default Services;
