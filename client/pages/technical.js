import React from 'react';
import Banner from '../components/Banner';
import technical from '../public/img/codingCloseUp.jpg';
import technicalSmall from '../public/img/codingCloseUpSmall.jpg';
import technical1 from '../public/img/codingCloseUp.webp';
import technical1Small from '../public/img/codingCloseUpSmall.webp';
import { useRouter } from 'next/router';
import Head from 'next/head';

// Import SVG components
import Js1 from '../public/svg/js-1.svg';
import Node from '../public/svg/node.svg';
import Css3 from '../public/svg/css-3.svg';
import Html from '../public/svg/html.svg';
import ReactSvg from '../public/svg/react.svg';
import Redux from '../public/svg/redux.svg';
import Mongodb from '../public/svg/mongodb.svg';
import Sass from '../public/svg/sass.svg';

function TechnicalPage(props) {
  const site = 'https://smarterwebsolutions.ca';
  const canURL = site + useRouter().pathname;

  return (
    <>
      <Head>
        <link rel='canonical' href={canURL} />
        <title>Web Design Toronto - Technical Skills</title>
        <meta
          name='description'
          content='Check out all the technical skills that make us great web development and web design experts.'
        ></meta>
      </Head>
      <Banner
        img={technical}
        imgSmall={technicalSmall}
        web={technical1}
        webSmall={technical1Small}
        text='Technical'
      />
      <div className='technical'>
        <h3 className='technical__header'>Technical Aptitude</h3>
        <p className='technical__secondary-header'>
          We have technical expertise in many aspects of web development. Check
          out our skills below!
        </p>

        <div className='technical__group'>
          <div className='technical__item'>
            <Js1 className='technical__icon' />
            <h4 className='technical__item-header'>Javascript</h4>
            <p className='technical__item-paragraph'>
              A workhorse and flexible language that creates a rich user
              experience. Javascript is used for many web based applications.
            </p>
          </div>
          <div className='technical__item'>
            <Node className='technical__icon' />
            <h4 className='technical__item-header'>Node.js</h4>
            <p className='technical__item-paragraph'>
              Node.js is an open source Javascript runtime environment that
              executes server side code. It is extremely efficient and
              eliminates the bottleneck other server side languages create.
            </p>
          </div>
          <div className='technical__item'>
            <Css3 className='technical__icon' />
            <h4 className='technical__item-header'>CSS</h4>
            <p className='technical__item-paragraph'>
              CSS is the engine behind the design of any great website. With new
              features coming out often, CSS 3 is the face of any modern
              website.
            </p>
          </div>
          <div className='technical__item'>
            <Html className='technical__icon' />
            <h4 className='technical__item-header'>HTML</h4>
            <p className='technical__item-paragraph'>
              The backbone of any website is HTML. It is the structure and
              essential elements of the website layout and design. Every website
              relies on html as its foundation.
            </p>
          </div>
          <div className='technical__item'>
            <ReactSvg className='technical__icon' />
            <h4 className='technical__item-header'>React</h4>
            <p className='technical__item-paragraph'>
              React is a powerful javascript library used for building efficient
              and elegant user interfaces. React makes web design extremely fun
              and exciting.
            </p>
          </div>
          <div className='technical__item'>
            <Redux className='technical__icon' />
            <h4 className='technical__item-header'>Redux</h4>
            <p className='technical__item-paragraph'>
              Redux is a javascript library used for managing data and
              information in the user interface. Redux is essential for any
              complex website that needs to be updated dynamically.
            </p>
          </div>
          <div className='technical__item'>
            <Mongodb className='technical__icon technical__icon--mongo' />
            <h4 className='technical__item-header'>MongoDB</h4>
            <p className='technical__item-paragraph'>
              MongoDB is a database that is used to flexibly store data sent
              from your website. MongoDB is a very powerful tool that allows
              websites to save and display data in a myriad of ways.
            </p>
          </div>
          <div className='technical__item'>
            <Sass className='technical__icon' />
            <h4 className='technical__
item-header'>Sass</h4>
            <p
              className='technical__item-paragraph'
              style={{ paddingBottom: '3.1rem' }}
            >
              Sass is a CSS pre-compiler that allows us to easily build highly
              designed websites in an efficient manner.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechnicalPage;
