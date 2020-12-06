import React from 'react';
import Sponsor from '../../shared/components/Sponsor/Sponsor';

import './MarketSentiment.css';

const MarketSentiment = () => {
  const sponsor = {
    name: 'ameritrade',
    img: 'https://www.kindpng.com/picc/m/391-3917800_td-ameritrade-logo-png-transparent-png.png'
   }

  return (
    <div className='market-page-title-container'>
      <h1 className='page-title'>Market Sentiment</h1>
      <Sponsor props={sponsor} />
    </div>

  )
};

export default MarketSentiment;