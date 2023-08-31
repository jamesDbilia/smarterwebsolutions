import React from 'react';
import moneytrackerImage3 from '../public/img/svg/grivetyimage3-min.png';
import moneytrackerImage2 from '../public/img/svg/grivetyImage2-min.png';
import moneytrackerImage4 from '../public/img/svg/grivetyImage4.svg';
import moneytrackerImage5 from '../public/img/svg/grivetyImage5-min.png';
import moneytrackerImage6 from '../public/img/svg/grivetyImage6-min.png';
import moneytrackerImage3web from '../public/img/svg/grivetyimage3-min.webp';
import moneytrackerImage2web from '../public/img/svg/grivetyImage2-min.webp';
import moneytrackerImage5web from '../public/img/svg/grivetyImage5-min.webp';
import moneytrackerImage6web from '../public/img/svg/grivetyImage6-min.webp';
import { Carousel } from 'react-bootstrap';

function GrivetyCarousel(props) {
  return (
    <>
      <Carousel>
        {/* slide 1 */}
        <Carousel.Item interval={2000}>
          <img
            className='fit fit--grivety'
            src={moneytrackerImage4}
            loading='lazy'
            alt='Third slide'
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <picture className='fit fit-grivety'>
            <source srcSet={moneytrackerImage2web} type='image/webp' />
            <source srcSet={moneytrackerImage2} type='image/jpeg' />
            <img
              src={moneytrackerImage2}
              loading='lazy'
              alt='First slide'
              className='fit fit--grivety'
            />
          </picture>
        </Carousel.Item>
        {/* slide 2 */}
        <Carousel.Item interval={2000}>
          <picture className='fit fit-grivety'>
            <source srcSet={moneytrackerImage3web} type='image/webp' />
            <source srcSet={moneytrackerImage3} type='image/jpeg' />
            <img
              src={moneytrackerImage3}
              loading='lazy'
              alt='First slide'
              className='fit fit--grivety'
            />
          </picture>
        </Carousel.Item>
        {/* slide 3 */}
        <Carousel.Item interval={200000}>
          <picture className='fit fit-grivety'>
            <source srcSet={moneytrackerImage5web} type='image/webp' />
            <source srcSet={moneytrackerImage5} type='image/jpeg' />
            <img
              src={moneytrackerImage5}
              loading='lazy'
              alt='First slide'
              className='fit fit--grivety'
            />
          </picture>
        </Carousel.Item>
        <Carousel.Item interval={200000}>
          <picture className='fit fit-grivety'>
            <source srcSet={moneytrackerImage6web} type='image/webp' />
            <source srcSet={moneytrackerImage6} type='image/jpeg' />
            <img
              src={moneytrackerImage6}
              loading='lazy'
              alt='First slide'
              className='fit fit--grivety'
            />
          </picture>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default GrivetyCarousel;
