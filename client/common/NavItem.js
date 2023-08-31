import React from 'react';
import Link from 'next/link';
function NavItem({ nav, active, hover, onClick, onMouseEnter, onMouseLeave }) {
  return (
    <Link smooth='true' href={`/${nav.route}`}>
      <li
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={
          active || hover
            ? 'nav-bar__item--active nav-bar__item'
            : 'nav-bar__item'
        }
      >
        <a
          className={
            active || hover
              ? 'nav-bar__link--active nav-bar__link'
              : 'nav-bar__link'
          }
        >
          {nav.mainItem}
        </a>
      </li>
    </Link>
  );
}

export default NavItem;
