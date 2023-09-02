import React from 'react';
import NavBarList from '../common/NavBarList';
import logo from '../public/img/logo.png';
import Image from 'next/image'

import logoweb from '../public/img/logo.webp';

function NavBar() {
  return (
    <div className='navbar'>
      <nav className='nav-bar'>
        <picture className='nav-bar__logo-picture'>
          <source srcSet={logoweb} type='image/webp' />
          <source srcSet={logo} type='image/jpeg' />
          <Image 
            className='nav-bar__logo '
            src={logo}
            alt='logo'
            loading='lazy'
          />
        </picture>
        <NavBarList />
      </nav>
    </div>
  );
}

export default NavBar;
