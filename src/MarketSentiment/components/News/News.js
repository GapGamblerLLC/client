import React from 'react';
import NewsCard from './NewsCard';

import './News.css';

const News = () => {

  const news = {
    title: 'lorem ipsum dolor sit amet',
    date: '12-12-2020',
    content: "Lorem Simpson Don't have a cow, man! excellent velocitator Cheese-eating surrender monkeys; it was the best of times, it was the blurst of times"
  }
  return (
    <div className='news-container'>
      <div className='news-title-container'>
        <h1 className='news__title'>Market News</h1>
        <h6>View More</h6>
      </div>
      <NewsCard news={news} />
      <NewsCard news={news} />
      <NewsCard news={news} />
    </div>

  )
}

export default News;