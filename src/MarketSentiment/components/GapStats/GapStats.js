import React from 'react';
import gapUp from '../../../shared/assets/gap_up.png';
import gapDown from '../../../shared/assets/gap_down.png';

import GapLine from './GapLine';

import './GapStats.css';


const GapStats = () => {

  const gapUpColor = 'green';
  const gapDownColor= 'orange';
  const votes = 12345;
  const percentageUp = '75%';
  const percentageDown= '25%';

  return (
    <div className='stats-container'>
      <h1 className='stats__title'>Gap Stats</h1>
      <h1 className='stats__day'>Tomorrow's Opening Bell Gap (10/20)</h1>
      <div className='stats__data-container'>
        <div className='stats__line-graph-container'>
          <GapLine bgcolor={gapUpColor} votes={votes} percentage={percentageUp} />
          <GapLine bgcolor={gapDownColor} votes={votes} percentage={percentageDown} />
        </div>
        <div className='stats__pie-chart-cotnainer'>

        </div>
      </div>
      <div className='stats__btn-container'>
        <div className='btn__gap-up'>
          <p>Gap Up</p>
          <img src={gapUp} alt={gapUp}/>
        </div>
        <div className='btn__gap-down'>
          <p>Gap Down</p>
          <img src={gapDown} alt={gapDown}/>
        </div>
      </div>
    </div>
  )
}

export default GapStats