import React, { useState } from 'react';
import TickerCard from '../UIElements/TickerCard'

import './WatchList.css';

const WatchList = () => {
  const [toggle, setToggle] = useState(true);

  const watchStock = {
    ticker: "GE",
    lastPrice: '$346.85',
    change: -2.44,
    changePercent: '0.70%',
    gapUp: '56%',
    gapDown: '44%',
    followers: 3456
  };

  const trendingStock = {
    ticker: "MD",
    lastPrice: '$420.85',
    change: 2.43,
    changePercent: '0.70%',
    gapUp: '50%',
    gapDown: '50%',
    followers: 3667
  };

  return( 
  <div className='watchlist-container'>
      <div className='watchlist-title-container'>
        <h1 className={toggle === true ? 'active' : 'inactive'} onClick={ () => setToggle(true)}>WatchList</h1>
        <h1 className={toggle === false ? 'active' : 'inactive'} onClick={ () => setToggle(false)}>Trending</h1>
      </div>
      <div className='watchlist-header-container'>
      <h5 className='watchlist-header'>Symbol</h5>
      <h5 className='watchlist-header'>Last</h5>
      <h5 className='watchlist-header'>Change</h5>
      <h5 className='watchlist-header'>Gap Stats</h5>
      <h5 className='watchlist-header'>Gamblers</h5>
    </div>
      <TickerCard stock={toggle === true ? watchStock : trendingStock}/>
      <TickerCard stock={toggle === true ? watchStock : trendingStock}/>
      <TickerCard stock={toggle === true ? watchStock : trendingStock}/>
      <TickerCard stock={toggle === true ? watchStock : trendingStock}/>
      <TickerCard stock={toggle === true ? watchStock : trendingStock}/>
      <TickerCard stock={toggle === true ? watchStock : trendingStock}/>
      <TickerCard stock={toggle === true ? watchStock : trendingStock}/>
      <TickerCard stock={toggle === true ? watchStock : trendingStock}/>
      <TickerCard stock={toggle === true ? watchStock : trendingStock}/>
      <TickerCard stock={toggle === true ? watchStock : trendingStock}/>
      <TickerCard stock={toggle === true ? watchStock : trendingStock}/>
      <TickerCard stock={toggle === true ? watchStock : trendingStock}/>
      <TickerCard stock={toggle === true ? watchStock : trendingStock}/>
      <TickerCard stock={toggle === true ? watchStock : trendingStock}/>
  </div>
  )};


export default WatchList;