import React from 'react';
import Image from 'next/image'
import moneytrackerImage3 from '../public/img/svg/grivetyimage3-min.png';
import moneytrackerImage2 from '../public/img/svg/grivetyImage2-min.png';
import MoneytrackerImage4 from '../public/img/svg/grivetyImage4.svg';
import moneytrackerImage5 from '../public/img/svg/grivetyImage5-min.png';
import moneytrackerImage6 from '../public/img/svg/grivetyImage6-min.png';

function ImageSlider(props) {
  var a = document.getElementsByTagName('button');
  var cfImg = document.getElementsByClassName('coverflow__image');

  var scaleI = 0;
  for (scaleI; scaleI < a.length; scaleI++) {
    if (scaleI === 3) {
      continue;
    } else {
      a[scaleI].style.cursor = 'default';
      a[scaleI].addEventListener('click', prevDef);
    }
  }

  function prevDef(e) {
    e.preventDefault();
  }

  function forScale(coverflowPos) {
    for (scaleI = 0; scaleI < a.length; scaleI++) {
      a[scaleI].style.cursor = 'default';
      a[scaleI].addEventListener('click', prevDef);
    }
    for (scaleI = 0; scaleI < cfImg.length; scaleI++) {
      if (cfImg[scaleI].getAttribute('data-coverflow-index') == coverflowPos) {
        cfImg[scaleI].parentElement.style.cursor = 'pointer';
        cfImg[scaleI].parentElement.removeEventListener('click', prevDef);
      }
    }
  }
  //end added by Chase

  function setupCoverflow(coverflowContainer) {
    var coverflowContainers;

    if (typeof coverflowContainer !== 'undefined') {
      if (Array.isArray(coverflowContainer)) {
        coverflowContainers = coverflowContainer;
      } else {
        coverflowContainers = [coverflowContainer];
      }
    } else {
      coverflowContainers = Array.prototype.slice.apply(
        document.getElementsByClassName('coverflow')
      );
    }

    coverflowContainers.forEach(function (containerElement) {
      var coverflow = {};
      var prevArrows, nextArrows;

      //capture coverflow elements
      coverflow.container = containerElement;
      coverflow.images = Array.prototype.slice.apply(
        containerElement.getElementsByClassName('coverflow__image')
      );
      coverflow.position = Math.floor(coverflow.images.length / 2) + 1;

      //set indicies on images
      coverflow.images.forEach(function (coverflowImage, i) {
        coverflowImage.dataset.coverflowIndex = i + 1;
      });

      //set initial position
      coverflow.container.dataset.coverflowPosition = coverflow.position;

      //get prev/next arrows
      prevArrows = Array.prototype.slice.apply(
        coverflow.container.getElementsByClassName('prev-arrow')
      );
      nextArrows = Array.prototype.slice.apply(
        coverflow.container.getElementsByClassName('next-arrow')
      );

      //add event handlers
      function setPrevImage() {
        coverflow.position = Math.max(1, coverflow.position - 1);
        coverflow.container.dataset.coverflowPosition = coverflow.position;
        //call the functin forScale added
        forScale(coverflow.position);
      }

      function setNextImage() {
        coverflow.position = Math.min(
          coverflow.images.length,
          coverflow.position + 1
        );
        coverflow.container.dataset.coverflowPosition = coverflow.position;
        //call the function Chase added
        forScale(coverflow.position);
      }

      function jumpToImage(evt) {
        coverflow.position = Math.min(
          coverflow.images.length,
          Math.max(1, evt.target.dataset.coverflowIndex)
        );
        coverflow.container.dataset.coverflowPosition = coverflow.position;
        //start added by Chase
        setTimeout(function () {
          forScale(coverflow.position);
        }, 1);
        //end added by Chase
      }

      function onKeyPress(evt) {
        switch (evt.which) {
          case 37: //left arrow
            setPrevImage();
            break;
          case 39: //right arrow
            setNextImage();
            break;
        }
      }
      prevArrows.forEach(function (prevArrow) {
        prevArrow.addEventListener('click', setPrevImage);
      });
      nextArrows.forEach(function (nextArrow) {
        nextArrow.addEventListener('click', setNextImage);
      });
      coverflow.images.forEach(function (image) {
        image.addEventListener('click', jumpToImage);
      });
      window.addEventListener('keyup', onKeyPress);
    });
  }

  setupCoverflow();
  return (
    <section className='row'>
      <div className='nine columns'>
        {/* <div className='coverflow top10 bot10'> */}
          {/* <button style={{ border: 'none' }} className='prev-arrow'></button> */}
          <a>
            <Image 
              alt='slide-1'
              src={moneytrackerImage2}
              className='coverflow__image'
            />
          </a>
          <a>
            <Image 
              alt='slide-2'
              src={moneytrackerImage3}
              className='coverflow__image'
            />
          </a>
          {/* <a>
            <MoneytrackerImage4 
              alt='slide-3'
              className='coverflow__image'
            />
          </a>
          <a>
            <Image 
              alt='slide-4'
              src={moneytrackerImage5}
              className='coverflow__image'
            />
          </a>
          <a>
            <Image 
              alt='slide-5'
              src={moneytrackerImage6}
              className='coverflow__image'
            />
          </a>
          <button style={{ border: 'none' }} className='next-arrow'></button> */}
        </div>
      {/* </div> */}
    </section>
  );
}

export default ImageSlider;
