import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ColorNumber from './ColorNumber';
import ColorHeader from './ColorHeader';

function ColorPalette({ color, text }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {});

  return (
    <>
      <ColorHeader />
      <div className='project__design-specifics'>
        <div className='project__color-shapes'>
          <div
            className='project__color-item project__color-item--1 '
            style={{ backgroundColor: color[0] }}
          >
            <ColorNumber color={color[0]} />
          </div>
          <div
            className='project__color-item project__color-item--2 '
            style={{ backgroundColor: color[1] }}
          >
            <ColorNumber color={color[1]} />
          </div>
          <div
            className='project__color-item project__color-item--3 '
            style={{ backgroundColor: color[2] }}
          >
            <ColorNumber color={color[2]} />
          </div>
          <p
            className={
              inView
                ? 'project__explanation project__explanation--visible project__explanation__color'
                : 'project__explanation'
            }
            ref={ref}
          >
            {text}
          </p>
        </div>
      </div>
    </>
  );
}

export default ColorPalette;
