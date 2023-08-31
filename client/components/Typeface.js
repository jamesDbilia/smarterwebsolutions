import React from 'react';
import { useInView } from 'react-intersection-observer';

function Typeface({ font }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div ref={ref}>
      <h4
        className={
          inView
            ? 'project__section-header  project__section-header--visible'
            : 'project__section-header project__section-header--animation'
        }
      >
        Typeface
      </h4>
      <div className='project__font'>
        <div
          className={
            inView
              ? 'project__font-heading project__font-heading--visible project__font-heading--1'
              : 'project__font-heading project__font-heading--1'
          }
        >
          <h2 className='project__font-example' style={{ fontFamily: font }}>
            Ab Bb
          </h2>
        </div>
        <h4
          className={
            inView
              ? 'project__font-description project__font-description--visible project__font-description--1 '
              : 'project__font-description project__font-description--1 '
          }
        >
          Heading
        </h4>

        <div
          className={
            inView
              ? 'project__font-heading project__font-heading--visible project__font-heading--2'
              : 'project__font-heading project__font-heading--2'
          }
        >
          <h2 className='project__font-example project__font-example--2'>
            Aa Bb
          </h2>
        </div>
        <h4
          className={
            inView
              ? 'project__font-description project__font-description--visible project__font-description--2 '
              : 'project__font-description project__font-description--2 '
          }
        >
          SubHeading
        </h4>
      </div>
    </div>
  );
}

export default Typeface;
