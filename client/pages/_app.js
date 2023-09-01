import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import '../App.scss';
import { Provider } from 'react-redux';
import { useStore } from '../utils/store';
import ToTopPageOnReload from '../utils/ToTopPageOnReload';
import Footer from '../components/Footer';
import { StaticRouter as Router } from 'react-router-dom';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const MyApp = ({ Component, pageProps }) => {
  const DynamicComponent = dynamic(() => import('../utils/ScreenWidth1'), {
    ssr: false,
  });

  useEffect(() => {
    ReactGA.initialize('UA-189418529-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  const canURL = useRouter().pathname;
  console.log('🚀 ~ file: _app.js ~ line 22 ~ MyApp ~ canURL', canURL);

  const store = useStore(pageProps.initialReduxState);
  return (
    <Router>
      <Provider store={store}>
        <Head>
          <link rel='shortcut icon' href='/favicon.ico' />
          <meta name='robots' content='index' />
          <meta
            name='keywords'
            content='web development, web design, e-commerce, website, developer, software, coding, web design toronto, toronto'
          />
          {/* <meta name='image' content='../src/img/WebDesign.jpg'></meta> */}
        </Head>
        <DynamicComponent />
        <ToTopPageOnReload>
          <Component {...pageProps} />
        </ToTopPageOnReload>
        <Footer />
      </Provider>
    </Router>
  );
};

export default MyApp;
