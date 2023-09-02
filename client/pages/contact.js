import React from 'react';
import Banner from '../components/Banner';
import Image from 'next/image';
import ContactFormSmall from '../components/ContactFormSmall';
import toronto from '../public/img/toronto.jpg';
import torontoSmall from '../public/img/torontoSmall.jpg';
import contactweb from '../public/img/contact.webp';
import contactwebSmall from '../public/img/contactSmall.webp';
import torontoweb from '../public/img/toronto.webp';
import torontowebSmall from '../public/img/torontoSmall.webp';
import { useRouter } from 'next/router';
import Head from 'next/head';

function ContactPage(props) {
  const site = 'https://smarterwebsolutions.ca';
  const canURL = site + useRouter().pathname;

  return (
    <>
      <Head>
        <title>Web Design Toronto - Contact Us Today</title>
        <meta
          name='description'
          content='Contact us today and let us help you build your website design'
        />
        <link rel='canonical' href={canURL} />
      </Head>
      <Banner
        img={contactweb}
        imgSmall={contactwebSmall}
        text='Contact'
        modifier='--contact'
      />
      <div className='contact-page'>
        <div className='contact-page__col-1'>
          <h3 className='contact-page__header'>Get In Touch</h3>
          <ContactFormSmall />
        </div>
        <div className='contact-page__col-2'>
          <h3 className='contact-page__header contact-page__header--1'>
            Our Contact Info
          </h3>
          <picture className='contact-page__location-picture'>
            <source
              srcSet={`${torontowebSmall} 600w, ${torontoweb}`}
              type='image/webp'
            />
            <source
              srcSet={`${toronto} 600w, ${torontoSmall}`}
              type='image/jpeg'
            />
            <Image
              src={toronto}
              alt='Toronto'
              className='contact-page__location-image'
              loading='lazy'
            />
          </picture>
          <h5 className='contact-page__location-name'>Toronto</h5>

          <div className='contact-page__info-section'>
            <div className='contact-page__info-section--col-1'>
              <div className='contact-page__info-header-section'>
                <Image
                  src='/svg/location.svg'
                  alt='Location'
                  className='contact-page__info-icon'
                />
                <h5 className='contact-page__info-header'>Address</h5>
              </div>
              <p className='contact-page__info-specifics'>
                1960 Queen Street E, Toronto, ON M4L 1H8
              </p>

              <div className='contact-page__info-header-section'>
                <Image
                  src='/svg/phone-call.svg'
                  alt='Phone'
                  className='contact-page__info-icon'
                />
                <h5 className='contact-page__info-header'>Phone</h5>
              </div>
              <a href='tel:416-577-4245' className='contact-page__info-specifics'>
                416-577-4245
              </a>

              <div className='contact-page__info-header-section'>
                <Image
                  src='/svg/email.svg'
                  alt='Email'
                  className='contact-page__info-icon'
                />
                <h5 className='contact-page__info-header'>Email</h5>
              </div>

              <a
                href='mailto:contact@smarterwebsolutions.ca'
                target='_blank'
                rel='noopener noreferrer'
                className='contact-page__info-specifics'
              >
                contact@smarterwebsolutions.ca
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
