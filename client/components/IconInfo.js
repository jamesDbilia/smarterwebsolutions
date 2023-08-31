import React from 'react';
import { useInView } from 'react-intersection-observer';

function IconInfo({ text }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <p
      ref={ref}
      className={
        inView
          ? 'project__explanation project__explanation--icon project__explanation--visible '
          : 'project__explanation project__explanation--icon'
      }
    >
      {text}
    </p>
  );
}

export default IconInfo;
