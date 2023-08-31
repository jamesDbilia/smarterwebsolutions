import React from 'react';
import { useInView } from 'react-intersection-observer';

function ColorNumber({ color }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <>
      <div
        className={
          inView
            ? 'project__color-label-section project__color-label-section--visible'
            : 'project__color-label-section'
        }
        ref={ref}
      >
        <p className='project__color-label'>{color}</p>
      </div>
    </>
  );
}

export default ColorNumber;
