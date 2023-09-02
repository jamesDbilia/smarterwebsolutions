import React from 'react';
import { useInView } from 'react-intersection-observer';
import IconInfo from './IconInfo';

import Construction from '../public/svg/construction.svg';
import Utilities from '../public/svg/icon-utilities.svg';
import Municipal from '../public/svg/icon-municipal.svg';
import Tree from '../public/svg/icon-tree.svg';
import Fire from '../public/svg/icon-fire.svg';
import Lab from '../public/svg/icon-lab.svg';

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
          <Construction className='project__project-icon' />
        </div>
        <div className='project__icon-background' style={{ backgroundColor }}>
          {' '}
          <Utilities className='project__project-icon' />
        </div>
        <div className='project__icon-background' style={{ backgroundColor }}>
          {' '}
          <Municipal className='project__project-icon' />
        </div>
        <div className='project__icon-background' style={{ backgroundColor }}>
          {' '}
          <Tree className='project__project-icon' style={{ backgroundColor }} />
        </div>
        <div className='project__icon-background' style={{ backgroundColor }}>
          {' '}
          <Fire className='project__project-icon' />
        </div>
        <div className='project__icon-background' style={{ backgroundColor }}>
          {' '}
          <Lab className='project__project-icon' />
        </div>
      </div>
      <IconInfo text={text} />
    </>
  );
}

export default Icons;
