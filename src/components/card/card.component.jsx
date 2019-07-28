import React from 'react';
import './card.styles.css';

const Card = (props) => (
  <div className='card-container'>
    <img alt='card' src={`https://robohash.org/${props.monster.id}?set=set2`} />
    <h1>{props.monster.name}</h1>
    <h1>{props.monster.email}</h1>
  </div>
)

export default Card