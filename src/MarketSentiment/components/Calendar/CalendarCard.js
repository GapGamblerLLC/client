import React from 'react';

import './CalendarCard.css';


const CalendarCard = props => {
  console.log(props.event)

  return (
    <div className='card-container'>
      <div className='card-content-container'>
        <h5 className='card-time'>{props.event.time}</h5>
        <h6 className='card-event'>{props.event.event}</h6>
      </div>
      <h1 className='arrow-link'> {'>'} </h1>
    </div>
  )
};

export default CalendarCard;