import React from 'react';

const GapLine = (props) => {
  const {bgcolor, votes, percentage} = props;

  const fillerStyles = {
    width: `${percentage}`,
    backgroundColor: bgcolor
  }

  return (
    <div className='line-container'>
      <div style={fillerStyles} className='line-filler'>
        <span className='votes'>{votes}</span>
      </div>
    </div>
  )
}

export default GapLine;