import React from 'react';
import Sponsor from '../../shared/components/Sponsor/Sponsor';
import WatchList from '../../shared/components/Watchlist/WatchList';
import Calendar from '../components/Calendar/Calendar';
import GapStats from '../components/GapStats/GapStats';
import News from '../components/News/News';
import Ticker from '../components/Ticker/Ticker';
import Thread from '../components/Thread/Thread';

import './MarketSentiment.css';

const MarketSentiment = () => {
  const sponsor = {
    name: 'ameritrade',
    img: 'https://www.kindpng.com/picc/m/391-3917800_td-ameritrade-logo-png-transparent-png.png'
   }

  return (
    <React.Fragment>
      <div className='market-page-title-container'>
        <h1 className='page-title'>Market Sentiment</h1>
        <Sponsor props={sponsor} />
      </div>
      <div className='market-page-main-container'>
        <WatchList />
        <div className='market-page-data-container'>
          <Ticker />
          <GapStats />
        </div>
        <div className='market-page-news-container'>
          <News />
          <Calendar />
        </div>
      </div>
      <Thread />      
    </React.Fragment>

  )
};

export default MarketSentiment;