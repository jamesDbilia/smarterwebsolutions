import React from 'react';
import { useInView } from 'react-intersection-observer';

function ColorHeader(props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <h4
      className={
        inView
          ? 'project__section-header project__section-header--visible'
          : 'project__section-header project__section-header--animation'
      }
      ref={ref}
    >
      Colour Palette
    </h4>
  );
}

export default ColorHeader;
