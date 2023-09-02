import React from 'react';
import Carousel from '../components/Carousel';
import About from '../components/About';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import Process from '../components/Process';
import { useRouter } from 'next/router';
import Head from 'next/head';
function App() {
  const site = 'https://smarterwebsolutions.ca';
  const canURL = site + useRouter().pathname;
  console.log('🚀 ~ file: index.js:12 ~ App ~ canURL:', canURL)

  return (
    <>
      <Head>
        <link rel='canonical' href={canURL} />
        <title>Web Design Toronto - Web Development Company Toronto</title>
        <meta
          name='description'
          content='Web Design Company in Toronto,
    specializing in custom website design, web development, e-commerce &amp; custom
    web based software.'
        ></meta>
      </Head>
      <div>
        <Carousel />
        <About />
        <Services />
        <Process />
        {/* <ContactForm />  */}
      </div>
    </>
  );
}

export default App;
