import React from 'react';

import './Sponsor.css'; 
import ameritrade from '../../assets/ameritrade.png';


const Sponsor = (props) => {
  const sponsor = props

  console.log(props)
  return (
    <div className= "sponsor__container">
      <h3 className='sponsor__title'>Sponsored by:</h3>
      <div className='sponor-image__container'>
        <img src={ameritrade} alt='ameritrade' />
      </div>
    </div>
  )
};

export default Sponsor;
