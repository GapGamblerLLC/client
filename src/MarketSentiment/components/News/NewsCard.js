import React from 'react';

import './NewsCard.css';


const NewsCard = props => {
  return (
    <div className='newscard-container'>
      <div className='newscard-content-container'>
        <h5 className='newscard-title'>{props.news.title}</h5>
        <h6 className='newscard-date'>{props.news.date}</h6>
        <p className='newscard-content'>{props.news.content}</p>
      </div>
      <h1 className='arrow-link'> {'>'} </h1>
    </div>
  )
};

export default NewsCard;