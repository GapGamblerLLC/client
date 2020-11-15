import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact >Market Sentiment</NavLink>
      </li>
      <li>
        <NavLink to='/earnings'  >Earnings Calendar</NavLink>
      </li>
      <li>
        <NavLink to='/top10'  >Top 10 Gamblers</NavLink>
      </li>
      <li>
        <NavLink to='/auth' >AUTHENTICATE</NavLink>
      </li>
    </ul>
  )
};

export default NavLinks;