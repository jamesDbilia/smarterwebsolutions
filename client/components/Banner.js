import React from 'react';
function Banner({ img, imgSmall, text, modifier, web, webSmall }) {
  return (
    <div className={`banner banner${modifier}`}>
      <picture className='banner__img'>
        <source srcSet={`${webSmall} 600w, ${web}`} type='image/webp' />
        <source srcSet={`${imgSmall} 600w, ${img}`} type='image/jpeg' />
        <img
          src={img}
          alt='First slide'
          className='banner__img'
          loading='lazy'
        />
      </picture>
      {/* <Gradient /> */}
      <h1 className='banner__header'>{text}</h1>
    </div>
  );
}

export default Banner;
