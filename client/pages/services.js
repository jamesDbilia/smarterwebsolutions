import React from 'react';
import teamwork from '../public/img/teamwork.jpg';
import Image from 'next/image'
import teamworkSmall from '../public/img/teamworkSmall.jpg';
import teamworkweb from '../public/img/teamwork.webp';
import teamworkwebSmall from '../public/img/teamworkSmall.webp';
import Banner from '../components/Banner';
import Monitor from '../public/img/svg/mobile friendly.svg';
// import Mobile from '../public/img/svg/mobilePhone.svg';
import responsive from '../public/img/file.png';
import { useRouter } from 'next/router';
import Head from 'next/head';
function ServicesPage(props) {
  const site = 'https://smarterwebsolutions.ca';
  const canURL = site + useRouter().pathname;

  return (
    <>
      <Head>
        <link rel='canonical' href={canURL} />
        <title>Web Design Toronto - Services</title>
        <meta
          name='description'
          content='Discover all the services we provide like
   custom website design, web development, e-commerce &amp; custom
    web based software.'
        ></meta>
      </Head>
      <div>
        <Banner
          img={teamwork}
          imgSmall={teamworkSmall}
          web={teamworkweb}
          webSmall={teamworkwebSmall}
          text='Services'
        />
        <div className='services__section services__section--split'>
          <div className='services__title-section' id='responsive'>
            <h3 className='services__title'>Responsive Design</h3>
          </div>
          <p className='services__text'>
            With each passing day the percentage of individuals browsing on
            their mobile application increases. You need a website that looks
            just as amazing on your computer, as it does on any other device.
            Building a website with Smarter Web Solutions means you are
            receiving a beautiful site for every device. We have the skills to
            create an intuitive experience and a headache free process for you.
            Allow your users to shop on their phone, easily view your inventory
            or allow your staff to manage orders. We make sure you are not
            limited, no matter what device you are using.
          </p>
          <Monitor  className='services__image  ' alt='monitor ' />
        </div>

        <div className='services__section '>
          <div className='services__title-section' id='mondern'>
            <h3 className='services__title'>Modern UI/UX Design</h3>
          </div>
          <p className='services__text'>
            It is our belief at Smarter Web Solutions that your webpage is your
            digital storefront. A professionally designed website goes a long
            way to inform your customers that they are interacting with a state
            of the art business. We are constantly keeping an eye on the latest
            trends and technologies that are developing daily, allowing websites
            to be more interactive, attractive and user friendly. Many cookie
            cutter web design sites leave a lot to be desired. It is very
            frustrating when there are some features that are unfortunately
            unavailable. That is not the case with Smarter Web Solutions.
            Whatever idea, design or markup you have in mind, we can create any
            customization to ensure your website looks exactly how you desire.
          </p>
        </div>
        <div
          className='services__section services__section--split'
          id='customized'
        >
          <div className='services__title-section services__title-section--odd '>
            <h3 className='services__title services__title--odd'>
              Customized Systems
            </h3>
          </div>
          <p className='services__text services__text--odd'>
            Are you in the need of a customized database, CRM or any other
            personalized systems but are unable to afford the extremely high
            price of a building your own desktop application? We are able to
            build any system you would like on a web application. Allow staff to
            sign in from anywhere to track orders, update delivery information
            or track inventory. Link your customized software to your website so
            that your inventory and user delivery status is updated
            automatically.
          </p>
          <Image 
            alt='monitor'
            className='services__image services__image--1'
            src={responsive}
          />
        </div>
        <div className='services__section ' id='profit'>
          <div className='services__title-section'>
            <h3 className='services__title '>Profit Online</h3>
          </div>
          <p className='services__text '>
            Roughly 30% of all commerce sales are occurring over mobile or web
            applications. Now more than ever with the ongoing Covid-19 pandemic,
            users want to be able to safely shop from the comfort of their home.
            We can set up the entire system so you can begin profiting from
            online shopping today. This will reduce the workload of your staff
            taking online phone orders or trying to perform cumbersome curbside
            transactions.
          </p>
        </div>
        <div
          className='services__section services__section--split'
          id='flexibility'
        >
          <div className='services__title-section'>
            <h3 className='services__title'>Mobile Flexibility</h3>
          </div>
          <p className='services__text'>
            One of the greatest benefits of a web application is cost savings,
            as it only has to be built once. Mobile/Desktop applications need to
            be built on Android and Apple in order to reach all your customers.
            Furthermore, web applications do not rely on native mobile settings,
            they rely on browser settings, which are much more stable. This will
            reduce the frequency of updates required for your website.
          </p>
          {/* <Mobile
            alt='mobile'
            className='services__image services__image--2'
          /> */}
        </div>
        <div className='services__section ' id='technology'>
          <div className='services__title-section'>
            <h3 className='services__title'>Technology Integration</h3>
          </div>
          <p className='services__text'>
            Website builders can often lack functionality. Whether you want to
            add Google Maps or your Twitter feed within the site, we can embed
            any programs of your choice to make the user experience more
            enjoyable. We can link data and communication with other services so
            that you can track inventory or display information for your users.
          </p>
        </div>
      </div>
    </>
  );
}

export default ServicesPage;
