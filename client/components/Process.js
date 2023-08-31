import React from 'react';
import sprite from '../public/img/svg/sprite.svg';
function Process(props) {
  return (
    <div className='process'>
      <div className='process__header-section'>
        <h2 className='process__header'>Our Process</h2>
      </div>
      <div className='process-grid'>
        <h3 className='process__step process__step--1'>Planning</h3>
        <div className='process__section process__section--1'>
          <svg className='process__icon process__icon--1'>
            <use href={`${sprite}#planning`}></use>
          </svg>
        </div>
        <h3 className='process__step process__step--2  '>Blueprint</h3>
        <div className='process__section process__section--2'>
          <div className='process__line-border '></div>
          <svg className='process__icon '>
            <use href={`${sprite}#wireframe`}></use>
          </svg>
        </div>
        <h3 className='process__step process__step--3 '>Design</h3>
        <div className='process__section process__section--3'>
          <div className='process__line-border '></div>
          <svg className='process__icon '>
            <use href={`${sprite}#web-design`}></use>
          </svg>
        </div>
        <h3 className='process__step process__step--4 '>Code</h3>
        <div className='process__section process__section--4'>
          <div className='process__line-border '></div>
          <svg className='process__icon '>
            <use href={`${sprite}#web-programming`}></use>
          </svg>
        </div>
        <h3 className='process__step process__step--5 '>Deployment</h3>
        <div className='process__section process__section--5'>
          <div className='process__line-border '></div>
          <svg className='process__icon '>
            <use href={`${sprite}#file-upload`}></use>
          </svg>
        </div>
      </div>
      <div className='process__paragraph'>
        <h3 className='process__secondary-header'>
          We follow the same 5 step process for every project to ensure that our
          clients are involved every step of the way
        </h3>
        <p className='process__secondary-text'>
          Every single website that is created by Smarter Web Solution goes
          through the same 5 step process. We only move onto the next step once
          the client provides final approval. We continue to review the product
          to guarantee all functionality is preserved at every step.
        </p>
      </div>
    </div>
  );
}

export default Process;
