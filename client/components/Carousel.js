import React, { useEffect } from 'react';
// import peopleMeeting from '../public/img/WebDesign.jpg';
import peopleMeetingSmall from '../public/img/WebDesignSmall.jpg';
import peopleMeetingwebSmall from '../public/img/WebDesignSmall.webp';
import peopleMeetingweb from '../public/img/WebDesign.webp';
import coding from '../public/img/codingCloseUp.jpg';
import codingSmall from '../public/img/codingCloseUpSmall.jpg';
import codingwebSmall from '../public/img/codingCloseUpSmall.webp';
import codingweb from '../public/img/codingCloseUp.webp';
import teamWork from '../public/img/teamwork.jpg';
import teamWorkSmall from '../public/img/teamworkSmall.jpg';
import teamWorkweb from '../public/img/teamwork.webp';
import teamWorkwebSmall from '../public/img/teamworkSmall.webp';
import Link from 'next/link';

function CarouselSection() {
  const { Carousel } = require('react-bootstrap');

  return (
    <>
      <Carousel>
        <Carousel.Item interval={8000}>
          <div className='carousel__container carousel__container--1'>
            <div className='carousel__inner-container'>
              <div className='carousel__header-1-background'>
                <h1 className='carousel__header-1'>Web Design Experts</h1>
              </div>
              <div className='carousel__header-5-background'>
                <h5 className={`carousel__header-5`}>
                  Building high quality websites for the modern business
                </h5>
              </div>
              <div className='carousel__button-container'>
                <Link href='/contact'>
                  <button className='carousel__button carousel__button--text'>
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <picture>
            <source
              srcSet={`${peopleMeetingwebSmall} 600w, ${peopleMeetingweb}`}
              type='image/webp'
            />
            {/* <source
              srcSet={`${peopleMeeting} 600w, ${peopleMeetingSmall}`}
              type='image/jpeg'
            /> */}
            {/* <img
              src={peopleMeeting}
              alt='First slide'
              className='fit'
              loading='lazy'
            /> */}
          </picture>
        </Carousel.Item>

        <Carousel.Item interval={8000}>
          <div className='carousel__container carousel__container--2'>
            <div className=' carousel__inner-container'>
              <div className='carousel__header-1-background carousel__header-1-background--1'>
                <h1 className='carousel__header-1'>Endless Possibilities</h1>
              </div>
              <div className='carousel__header-5-background carousel__header-5-background--1'>
                <h5 className={`carousel__header-5`}>
                  Discover all of our services for your business needs
                </h5>
              </div>
              <div className='carousel__button-container'>
                <Link href='services'>
                  <button
                    href='/services'
                    className='carousel__button--text carousel__button'
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <picture>
            <source
              srcSet={`${codingwebSmall} 600w, ${codingweb}`}
              type='image/webp'
            />
            <source
              srcSet={`${coding} 600w, ${codingSmall}`}
              type='image/jpeg'
            />
            <img
              src={coding}
              alt='First slide'
              className='fit'
              loading='lazy'
            />
          </picture>
        </Carousel.Item>

        <Carousel.Item interval={8000}>
          <div className='carousel__container carousel__container--3'>
            <div className=' carousel__inner-container'>
              <div className='carousel__header-1-background carousel__header-1-background--2'>
                <h1 className='carousel__header-1'>Check Out Our Work</h1>
              </div>
              <div className='carousel__header-5-background carousel__header-5-background--2'>
                <h5 className='carousel__header-5 carousel__header-5--2'>
                  Take a look at how we've helped other businesses build their
                  dream
                </h5>
              </div>

              <div className='carousel__button-container'>
                <Link href='/portfolio'>
                  <button className='carousel__button carousel__button--text'>
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <picture>
            <source
              srcSet={`${teamWorkwebSmall} 600w, ${teamWorkweb}`}
              type='image/webp'
            />
            <source
              srcSet={`${teamWork} 600w, ${teamWorkSmall}`}
              type='image/jpeg'
            />
            <img
              src={teamWork}
              alt='First slide'
              className='fit'
              loading='lazy'
              alt='Third slide'
            />
          </picture>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselSection;
