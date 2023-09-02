import React, { useState } from 'react';
import Grivety from '../components/Grivety';
import Mediaor from '../components/Mediaor';
import CleanSoils from '../components/CleanSoils';
import GrivetyLogo from '../public/img/svg/grivetylogo-1.svg';
import CleanSoilsLogo from '../public/svg/cleanSoils.svg';
import MediaorImage from '../public/img/svg/mediaor.svg';
import Link from 'next/link';
import BackgroundImage from '../public/img/svg/background.svg';
import Gradient from '../common/Gradient';
import { useMediaQuery } from '../utils/ScreenWidth';
import { useRouter } from 'next/router';
import Head from 'next/head';

function Portfolio(props) {
  const [app, setApp] = useState('cleanSoils');
  const [app1, setApp1] = useState('cleanSoils');

  const mediaQuery = useMediaQuery(600);
  const mediaQuery2 = useMediaQuery(450);
  const site = 'https://smarterwebsolutions.ca';
  const canURL = site + useRouter().pathname;

  return (
    <>
      <Head>
        <link rel='canonical' href={canURL} />
        <title>Web Design Toronto - Portfolio</title>
        <meta
          name='description'
          content='View some of the great work we have done for other small businesses, building their web applications and their custom web based software.'
        />
      </Head>
      <div className='portfolio'>
        <Gradient color='white' />
        <BackgroundImage
          alt='backgroundImage'
          className='portfolio__background'
        />
        <div className='portfolio__grid'>
          {app === 'cleanSoils' ? (
            <CleanSoils />
          ) : app === 'grivety' ? (
            <Grivety />
          ) : (
            <Mediaor />
          )}

          <div className='portfolio__bottom-menu'>
            {/* <Link href='/contact'>
              <button className='portfolio__start-project portfolio__link'>
                Start Project
              </button>
            </Link> */}
            {!mediaQuery ? (
              <div className='portfolio__logo-bottom-section'>
                <CleanSoilsLogo
                  className='portfolio__logo--bottom'
                  alt='grivety logo'
                  onClick={() => setApp('cleanSoils')}
                />
                     <GrivetyLogo
                  className='portfolio__logo--bottom'
                  alt='grivety logo'
                  onClick={() => setApp('grivety')}
                />
                <MediaorImage
                  className='portfolio__logo--bottom portfolio__logo--bottom--mediaor'
                  style={{ paddingRight: '1rem' }}
                  alt='mediaor'
                  onClick={() => setApp('mediaor')}
                />
              </div>
            ) : mediaQuery && !mediaQuery2 ? (
              <div className='portfolio__logo-bottom-section'>
                {app1 === 'cleanSoils' ? (
                  <>
                       <CleanSoilsLogo
                  className='portfolio__logo--bottom'
                  alt='grivety logo'
                  onClick={() => setApp('grivety')}
                />
                    <GrivetyLogo
                      className='portfolio__logo--bottom'
                      alt='grivety'
                      onClick={() => setApp('grivety')}
                    />
                  </>
                ) : app1 === 'grivety' ? (
                  <>
                    <GrivetyLogo
                      className='portfolio__logo--bottom'
                      alt='grivety'
                      onClick={() => setApp('grivety')}
                    />
                    <MediaorImage
                      className='portfolio__logo--bottom '
                      alt='mediaor'
                      onClick={() => setApp('mediaor')}
                    />
                  </>
                ) : (
                  <>
                    <MediaorImage
                      className='portfolio__logo--bottom '
                      alt='mediaor'
                      onClick={() => setApp('mediaor')}
                    />
                         <CleanSoilsLogo
                  className='portfolio__logo--bottom'
                  alt='grivety logo'
                  onClick={() => setApp('grivety')}
                />
                  </>
                )}
                <svg
                  className='portfolio__next-button'
                  onClick={() =>
                    setApp1(
                      app1 === 'cleanSoils'
                        ? 'grivety'
                        : app1 === 'grivety'
                        ? 'mediaor'
                        : 'cleanSoils'
                    )
                  }
                ></svg>
              </div>
            ) : (
              <div className='portfolio__logo-bottom-section'>
                {app === 'cleanSoils' ? (
                  <GrivetyLogo
                    className='portfolio__logo--bottom'
                    alt='grivety'
                    onClick={() => setApp('cleanSoils')}
                  />
                ) : app === 'grivety' ? (
                  <GrivetyLogo
                    className='portfolio__logo--bottom'
                    alt='grivety'
                    onClick={() => setApp('grivety')}
                  />
                ) : (
                  <MediaorImage
                    className='portfolio__logo--bottom '
                    alt='mediaor'
                    onClick={() => setApp('mediaor')}
                  />
                )}
                <svg
                  className='portfolio__next-button'
                  onClick={() =>
                    setApp(
                      app === 'cleanSoils'
                        ? 'grivety'
                        : app === 'grivety'
                        ? 'mediaor'
                        : 'cleanSoils'
                    )
                  }
                ></svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
