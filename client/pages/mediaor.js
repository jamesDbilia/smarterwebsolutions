import React, { useEffect } from 'react';
import Link from 'next/link';
import ContactUsProject from '../components/ContactUsProject';
import ColorPalette from '../components/ColorPalette';
import { useInView } from 'react-intersection-observer';
import Typeface from '../components/Typeface';
import Icons from '../components/Icons';
import MediaorLogo from '../public/img/svg/mediaor.svg';
import mediaorImage1 from '../public/img/mediaorImage1.png';
import mediaorImage1Small from '../public/img/mediaorImage1Small.png';
import mediaorImage2 from '../public/img/mediaorImage2.png';
import mediaorImage2Small from '../public/img/mediaorImage2Small.png';
import mediaorImageweb1 from '../public/img/mediaorImage1.webp';
import mediaorImagewebSmall1 from '../public/img/mediaorImage1Small.webp';
import mediaorImageweb2 from '../public/img/mediaorImage2.webp';
import mediaorImageweb2Small from '../public/img/mediaorImage1Small.webp';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image'

function MediaorPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const site = 'https://smarterwebsolutions.ca';
  const canURL = site + useRouter().pathname;

  return (
    <>
      <Head>
        <link rel='canonical' href={canURL} />
        <title>Web Design Toronto - Mediaor</title>
        <meta
          name='description'
          content='Mediaor is one of our favourite projects, creating a rich user experience for media display'
        />
      </Head>
      <div className='project'>
        <div className='project__company-logo-section'>
          <MediaorLogo
            className='portfolio__company-logo portfolio__company-logo--mediaor'
            alt='mediaor'
          />
        </div>
        <p className='project__description'>
          Mediaor shows the possibilites of how media can be creatively
          displayed, especially for a business that needs their content to be
          front and center. Mediaor is a digital media application that displays
          blog posts, image galleries and videos.
        </p>

        <picture className=' project__image-picture'>
          <source
            srcSet={`${mediaorImagewebSmall1} 600w, ${mediaorImageweb1}`}
            type='image/webp'
          />
          <source
            srcSet={`${mediaorImage1} 600w, ${mediaorImage1Small}`}
            type='image/jpeg'
          />
          <Image
            src={mediaorImage1}
            alt='Mediaor Screenshot'
            className='project__image project__image--mediaor project__image--mediaor--1 '
            loading='lazy'
          />
        </picture>
        <picture className=' project__image-picture  '>
          <source
            srcSet={`${mediaorImageweb2Small} 600w, ${mediaorImageweb2}`}
            type='image/webp'
          />
          <source
            srcSet={`${mediaorImage2} 600w, ${mediaorImage2Small}`}
            type='image/jpeg'
          />
          <Image
            src={mediaorImage2}
            alt='Mediaor Screenshot'
            className='project__image project__image--mediaor project__image--mediaor--2  '
            loading='lazy'
          />
        </picture>

        <h2
          className={
            inView
              ? 'project__large-header--visible project__large-header'
              : 'project__large-header'
          }
          ref={ref}
        >
          Style
          <span
            className={
              inView
                ? 'project__large-header--visible project__large-header project__large-header--1'
                : 'project__large-header project__large-header--1'
            }
          >
            Zone
          </span>
        </h2>
        <ColorPalette color={['#ffba40', '#dc3545', '#343a40']} />
        <Typeface font='Helvetica Neue' />
        <Icons
          backgroundColor='#dc3545'
          icons={[
            '#bullhorn',
            '#cloud-solid',
            '#cog',
            '#comment',
            '#building',
            '#cart',
          ]}
          text='Mediaor is able to take any content and turn it into something innovative and captivating so that users are engaged in all areas of the site.  Smarter Web Solutions design worked tirelessly to create a unique layout, with essential wireframe as the foundation'
        />
        <h2 className='project__contact-header'>Contact Us</h2>
        <ContactUsProject />

        <div className='project__next-button-section'>
          <Link href='/cleanSoils'>
            <button className='project__next-button'>
              <p className='project__next-button--text'>Next Project</p>
            </button>
          </Link>
          <Link href='/cleanSoils'>
            <p className='project__next-button-arrow'>
              <svg className='project__next-icon'></svg>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MediaorPage;
