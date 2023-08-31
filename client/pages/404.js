import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

function NotFoundPage(props) {
  const site = 'https://smarterwebsolutions.ca';
  const canURL = site + useRouter().pathname;

  return (
    <>
      <Head>
        <title>Web Design Toronto - 404</title>
        <meta
          name='description'
          content='You have reached a broken page, please return home'
        ></meta>

        <link rel='canonical' href={canURL} />
      </Head>
      <section className='wrapper'>
        <div className='container'>
          <div id='scene' className='scene' data-hover-only='false'>
            <div className='circle' data-depth='1.2'></div>

            <div className='one' data-depth='0.9'>
              <div className='content'>
                <span className='piece'></span>
                <span className='piece'></span>
                <span className='piece'></span>
              </div>
            </div>

            <div className='two' data-depth='0.60'>
              <div className='content'>
                <span className='piece'></span>
                <span className='piece'></span>
                <span className='piece'></span>
              </div>
            </div>

            <div className='three' data-depth='0.40'>
              <div className='content'>
                <span className='piece'></span>
                <span className='piece'></span>
                <span className='piece'></span>
              </div>
            </div>

            <p className='p404' data-depth='0.50'>
              404
            </p>
            <p className='p404' data-depth='0.10'>
              404
            </p>
          </div>

          <div className='text'>
            <article>
              <p>
                Uh oh! Looks like you got lost. <br />
                Go back to the homepage if you dare!
              </p>
              <Link href='/'>
                <button className='jello' style={{ outline: 'none' }}>
                  i dare!
                </button>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFoundPage;
