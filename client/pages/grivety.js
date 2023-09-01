import React from 'react';
import Link from 'next/link';
// import sprite from '../public/svg/sprite.svg';
import ContactUsProject from '../components/ContactUsProject';
import ColorPalette from '../components/ColorPalette';
import { useInView } from 'react-intersection-observer';
import Typeface from '../components/Typeface';
import Icons from '../components/Icons';
import grivetyLogo from '../public/img/svg/grivetylogo-1.svg';
import GrivetyCarousel from '../components/GrivetyCarousel';
import { useMediaQuery } from '../utils/ScreenWidth';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Head from 'next/head';
const DynamicComponent = dynamic(() => import('../components/ImageSlider'), {
  ssr: false,
});
function GrivetyPage({ color }) {
  const { ref, inView } = useInView({
    // triggerOnce: true,
  });
  const mediaQuery = useMediaQuery(770);

  const site = 'https://smarterwebsolutions.ca';
  const canURL = site + useRouter().pathname;

  return (
    <>
      <Head>
        <meta
          name='description'
          content='Grivety displays the complexity that we can create, no matter how difficult your projectk'
        ></meta>

        <title>Web Design Toronto - Grivety</title>
        <link rel='canonical' href={canURL} />
      </Head>
      <div className='project'>
        <div className='project__company-logo-section'>
          <img
            src={grivetyLogo}
            className='portfolio__company-logo portfolio__company-logo--grivety'
            alt='grivety logo'
          />
        </div>
        <p className='project__description'>
          Grivety is a modern banking web application that displays the power of
          using a database in unison with your web server. Grivety displays data
          in every imaginable way. Grivety was an extremely exciting project to
          create as it showed how powerful web development can be for advanced
          applications.
        </p>
        {!mediaQuery ? <DynamicComponent /> : <GrivetyCarousel />}
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
        <ColorPalette
          color={['#48b461', '#e15361', '#44a2a3']}
          text='Grivety is a prototype budgeting app that is designed to show the
            possibilites that can be created using a full scale application with
            a database on the backend. In observing Grivety it can be seen that any
            system that your business needs is possible. Whether you
            need to be track inventory or manage deliveries, Smarter Web
            Solutions can create your system.'
        />
        <Typeface font='Segoe UI' />
        <Icons
          backgroundColor='#44a2a3'
          icons={[
            '#piggy',
            '#wallet',
            '#funnel',
            '#money',
            '#credit',
            '#graph',
          ]}
          text='It is essential that Grivety had advanced security features to protect sensitive information.  Smarter Web Solutions ensures with every application we create that the highest level of security is used to protect user data and your data.'
        />
        {/* <h2 className='project__large-header'>
        Final
        <span className='project__large-header project__large-header--1'>
          Product
        </span>
      </h2> */}
        {/* <div className='project__final-image-section'></div>
      <h4 className='project__deliverables-header'>Deliverables</h4>
      <div className='project__deliverables project__deliverables--1'>
        <svg className='project__project-icon'>
          <use href={CleanSoilsSprite + '#reduction'}></use>
        </svg>
        <h4 className='project__deliverables--title'>Admin Panel</h4>
        <p className='project__deliverables--description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          deleniti!
        </p>
        project__deliverables
      </div>
      <div className='project__deliverables project__deliverables--2'>
        <svg className='project__deliverable-icon'>
          <use></use>
        </svg>
        <h4 className='project__deliverables--title'>Admin Panel</h4>
        <p className='project__deliverables--description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          deleniti!
        </p>
      </div> */}

        <h2 className='project__contact-header'>Contact Us</h2>
        <ContactUsProject />
        <div
          className='project__next-button-section'
          // onClick={() => refreshPage()}
          style={{ cursor: 'default' }}
        >
          <Link href='/mediaor'>
            <a className='project__next-button' style={{ cursor: 'pointer' }}>
              <p className='project__next-button--text'>Next Project</p>
            </a>
          </Link>
          <Link href='/mediaor'>
            <a
              className='project__next-button-arrow'
              style={{ cursor: 'pointer' }}
            >
              <svg className='project__next-icon'>
                {/* <use href={sprite + '#play'}></use> */}
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default GrivetyPage;
