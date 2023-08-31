import React, { useEffect } from 'react';
import { resetContactRedirect } from '../actions/EmailActions';
import { connect } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
function ContactSuccess({ resetContactRedirect }) {
  const site = 'https://smarterwebsolutions.ca';
  const canURL = site + useRouter().pathname;

  useEffect(() => {
    return resetContactRedirect();
  }, [canURL]);
  return (
    <>
      <Head>
        <link rel='canonical' href={canURL} />
      </Head>
      <div className='contact-success'>
        <h3 className='contact-success__text'>
          Thank you for contacting Smarter Web Solutions. We have successfully
          received your inquiry. Someone will contact you as soon as possible.
        </h3>
        <Link href='/'>
          <button
            className='contact-success__button'
            onClick={() => {
              console.log('hello');
              resetContactRedirect();
            }}
            style={{
              textDecoration: 'none',
              color: '#fff',
            }}
          >
            Return To Home Page
          </button>
        </Link>
      </div>
    </>
  );
}

export default connect(null, { resetContactRedirect })(ContactSuccess);
