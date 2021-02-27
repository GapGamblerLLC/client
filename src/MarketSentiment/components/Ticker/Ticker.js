import React, { useEffect } from 'react';
import { getDailyChartForSymbol } from './ApiConnector.js'
import Chart from './Chart';

import './Ticker.css';

const Ticker = () => {
  useEffect(() => {
    const fetchStockData = async () => {
      const result = await getDailyChartForSymbol('TSLA');

      console.log(result.data);
    };

    fetchStockData();
  }, []);
  return (
    <div className='ticker-container'>
      <Chart />
    </div>
  )
};

export default Ticker;