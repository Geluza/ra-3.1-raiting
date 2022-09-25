import React from 'react';
import propTypes from 'prop-types';
import Star from './Star';

function Stars({count}) {

  if (typeof count !== "number" || count < 1 || count > 5) {
  return null;
  }

  const stars = [];
  
  for(let i = 0; i < count; i++){
   stars.push(i);
  }
 
  const countStars = stars.map(star => <Star key={star}/>)

  return (
    <ul class="card-body-stars u-clearfix">
    {countStars}
    </ul>
  )
}

export default Stars;



Stars.propTypes = {
  count: propTypes.number,
}

Stars.defaultProps = {
  count: 0,
}