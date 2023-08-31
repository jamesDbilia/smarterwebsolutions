import React from 'react';
import Banner from '../components/Banner';
import planning from '../public/img/planning.jpg';
import planningSmall from '../public/img/planningSmall.jpg';
import wireframing from '../public/img/wireframing.jpg';
import wireframingSmall from '../public/img/wireframingSmall.jpg';
import design from '../public/img/design.jpg';
import designSmall from '../public/img/designSmall.jpg';
import coding from '../public/img/coding.jpg';
import codingSmall from '../public/img/codingSmall.jpg';
import deployment from '../public/img/deployment.jpg';
import deploymentSmall from '../public/img/deploymentSmall.jpg';
import ContactForm from '../components/ContactForm';
import Process from '../components/Process';
import process from '../public/img/process.jpg';
import processSmall from '../public/img/processSmall.jpg';
import processweb from '../public/img/process.webp';
import processwebSmall from '../public/img/processSmall.webp';
import { useRouter } from 'next/router';
import Head from 'next/head';
function ProcessPage(props) {
  const site = 'https://smarterwebsolutions.ca';
  const canURL = site + useRouter().pathname;

  return (
    <>
      <Head>
        <link rel='canonical' href={canURL} />
        <title>Web Design Toronto - Process</title>
        <meta
          name='description'
          content='See the process you will go through with our web development experts building
    you custom website design or custom
    web based software.'
        ></meta>
      </Head>
      <div>
        <Banner
          img={process}
          imgSmall={processSmall}
          web={processweb}
          webSmall={processwebSmall}
          text='Web Development Process'
        />

        <div className='process-page__intro-section'>
          <h3 className='process-page__header'>The Web Development Process</h3>
          <p className='process-page__intro-paragraph'>
            At Smarter Web Solutions we value building websites as much as we
            value building our relationship with our customers. We believe it is
            essential to really get to know our customers to help us build the
            website they imaged and help their business thrive. At each step we
            review our accomplishments to make sure we have met all their
            expectations before moving onto the next task.
          </p>
        </div>
        <div className='process-page__section'>
          <img
            srcSet={`${planningSmall} 600w, ${planning}`}
            src={planning}
            alt=''
            className='process-page__image process-page__image--1'
          />
          <div className='process-page__section-text'>
            <h4 className='process-page__section-header'>Planning</h4>
            <p className='process-page__section-paragraph'>
              The first step in creating a website is a solid project plan. We
              get input from our client regarding what they would like to
              accomplish from this project. The initial scope can come from
              phone calls and zoom meetings with the client or our design team.
              The purpose of our initial meeting is to understand the clients
              goals and get inspired by their design preferences and vision for
              their website. This will set us up for building the initial
              blueprint.
            </p>
          </div>
          <div className='process-page__section-text'>
            <h4 className='process-page__section-header'>Blueprint</h4>
            <p className='process-page__section-paragraph'>
              Once the planning is complete we can begin building the wireframe
              of the site. This process involves determining the layout of the
              site. Our wireframing team will design the structure of the site.
              We will work with the client until they are satisfied with the
              wireframe of their website.
            </p>
          </div>
          <img
            srcSet={`${wireframingSmall} 600w, ${wireframing}`}
            src={wireframing}
            alt=''
            className='process-page__image process-page__image--2'
          />
          <img
            srcSet={`${designSmall} 600w, ${design}`}
            src={design}
            alt='design'
            className='process-page__image process-page__image--3'
          />

          <div className='process-page__section-text'>
            <h4 className='process-page__section-header'>Design</h4>
            <p className='process-page__section-paragraph'>
              Once the blueprint of the site is complete, our design team can
              take over and bring the clients application to life. Incorporating
              the company colors and design theme, we will create an initial
              design of their website. The client will be presented with how
              their site will look, before any code is created. They will be
              able to click around and make any changes you desire.
            </p>
          </div>
          <div className='process-page__section-text'>
            <h4 className='process-page__section-header'>Code</h4>
            <p className='process-page__section-paragraph'>
              Once the design is complete, it is time to build the magic that
              occurs behind the scenes. We use an agile method of web
              development at Smarter Web Solutions which involves a series of
              'Sprints'. At the end of each sprint we will review the website
              with the client to ensure that they are happy with the progress.
              Agile web development involves a thorough testing process to
              ensure that the website is running perfectly before deployment.
            </p>
          </div>
          <img
            src={codingSmall}
            srcSet={`${codingSmall} 600w, ${coding}`}
            alt='coding'
            className='process-page__image process-page__image--4'
          />
          <img
            srcSet={`${deploymentSmall} 600w, ${deployment}`}
            src={deployment}
            alt=''
            className='process-page__image process-page__image--5'
          />

          <div className='process-page__section-text'>
            <h4 className='process-page__section-header'>Deployment</h4>
            <p className='process-page__section-paragraph'>
              Once the application is complete, it is reviewed and approved by
              our project manager and quality assurance team and the client. Now
              that the clients website is complete it is time to show it to the
              world! There are many different options for deploying your website
              which include: running it on a client side server, basic web
              hosting or a cloud hosted provider. We will counsel the client on
              this final step and determine what is the best option.
            </p>
          </div>
        </div>
        <Process />
        <ContactForm />
      </div>
    </>
  );
}

export default ProcessPage;
