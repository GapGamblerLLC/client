import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';
import './MainNavigation.css';


const MainNavigation = props => {


  return (
    <React.Fragment>
     <MainHeader>    
      <h1 className='main-navigation__title'>
        <Link to='/'><span>Gap</span>Gambler</Link>
      </h1>
      <SearchBar />
      <nav className='main-navigation__header-nav'>
        <NavLinks />
      </nav>
    </MainHeader>
    </React.Fragment>
  )
};

export default MainNavigation;