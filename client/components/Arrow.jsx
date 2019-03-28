import React from 'react';

const Arrow = ({direction, clickFunction, icon}) => {
  
  return (
    <div
      className={ `slide-arrow ${direction}` }
      onClick={ clickFunction }>
      { icon }
    </div>
  )};

export default Arrow;