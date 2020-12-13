import React from  'react';

import './TickerCard.css';


const TickerCard = props => {
   

  return (
    <div className='ticker-card-container'>
      <h5 className='ticker-title'>{props.stock.ticker}</h5>
      <h5 className='last-price'>{props.stock.lastPrice}</h5>
      <div className='ticker-change-container'>
        <h6 className={props.stock.change < 0 ? 'gapdown' : 'gapup'}>{props.stock.change}</h6>
        <h6 className={props.stock.change < 0 ? 'gapdown' : 'gapup'}>{props.stock.changePercent}</h6>
      </div>
      <div className='ticker-stats-container'>
        <h6 className='gapup'>{props.stock.gapUp}</h6>
        <h6 className='gapdown'>{props.stock.gapDown}</h6>
      </div>
      <h5 className='followers'>{props.stock.followers}</h5>
    </div>
  )
};


export default TickerCard;