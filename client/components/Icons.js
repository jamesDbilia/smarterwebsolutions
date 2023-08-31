import React from 'react';
import sprite from '../public/img/svg/sprite.svg';
import { useInView } from 'react-intersection-observer';
import IconInfo from './IconInfo';

function Icons({ icons, text, backgroundColor }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <h3
        className={
          inView
            ? 'project__section-header project__section-header--visible'
            : 'project__section-header project__section-header--animation'
        }
      >
        Icons
      </h3>
      <div
        ref={ref}
        className={
          inView
            ? 'project__icon-section project__icon-section--visible'
            : 'project__icon-section'
        }
      >
        <div className='project__icon-background' style={{ backgroundColor }}>
          {' '}
          <svg className='project__project-icon'>
            <use href={sprite + icons[0]}></use>
          </svg>
        </div>
        <div className='project__icon-background' style={{ backgroundColor }}>
          {' '}
          <svg className='project__project-icon'>
            <use href={sprite + icons[1]}></use>
          </svg>
        </div>
        <div className='project__icon-background' style={{ backgroundColor }}>
          {' '}
          <svg className='project__project-icon'>
            <use href={sprite + icons[2]}></use>
          </svg>
        </div>
        <div className='project__icon-background' style={{ backgroundColor }}>
          {' '}
          <svg className='project__project-icon' style={{ backgroundColor }}>
            <use href={sprite + icons[3]}></use>
          </svg>
        </div>
        <div className='project__icon-background' style={{ backgroundColor }}>
          {' '}
          <svg className='project__project-icon'>
            <use href={sprite + icons[4]}></use>
          </svg>
        </div>
        <div className='project__icon-background' style={{ backgroundColor }}>
          {' '}
          <svg className='project__project-icon'>
            <use href={sprite + icons[5]}></use>
          </svg>
        </div>
      </div>
      <IconInfo text={text} />
    </>
  );
}

export default Icons;
