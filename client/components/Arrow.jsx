import React from 'react';

const Arrow = ({direction, clickFunction, clickable}) => {

  let src = (direction === 'left')
    ? 'https://s3-us-west-1.amazonaws.com/zallosimilarhomes/left-arrow.png'
    : 'https://s3-us-west-1.amazonaws.com/zallosimilarhomes/right-arrow.png';

  let arrowClass = clickable
    ? 'sim-homes-arrow-on'
    : 'sim-homes-arrow-off';

  return (
    <div className={`sim-homes-slide-arrow ${direction} ${arrowClass}`}
      onClick={clickFunction}>
      <img className={'sim-homes-arrow-image'} src={src}/>
    </div>
  );
};

export default Arrow;
