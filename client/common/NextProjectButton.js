import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../public/svg/sprite.svg';

function NextProjectButton(props) {
  return (
    <div className='project__next-button-section'>
      <Link className='project__next-button'>
        <Link to='/mediaor' className='project__next-button--text'>
          Next Project
        </Link>
      </Link>
      <Link to='/mediaor' className='project__next-button-arrow'>
        <svg className='project__next-icon'>
          <use href={sprite + '#play'}></use>
        
      </Link>
    </div>
  );
}

export default NextProjectButton;
