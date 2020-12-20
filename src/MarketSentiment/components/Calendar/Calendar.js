import React from 'react';
import CalendarCard from './CalendarCard'

import './Calendar.css';

const Calendar = () => {
  const events = [
    {
    time: '8:30 AM',
    event: 'Some event at this time.',
    },
    {
    time: '10:30 AM',
    event: 'Some event at this time.',
    },
    {
    time: '3:30 PM',
    event: 'Some event at this time.',
    }
  ]
  return (
    <div className='calendar-container'>
      <div className='calendar-title-container'>
        <h1 className='calendar__title'>Economic Calendar</h1>
        <h6>View More</h6>
      </div>
      <div className='events-container'>
      {events.forEach( event => {
        <CalendarCard key={events.indexOf(event)} event={event} />
      })}
      </div>
    </div>

  )
}

export default Calendar;