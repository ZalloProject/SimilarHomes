import React from 'react';

const Arrow = ({direction, clickFunction, clickable}) => {
  
  let src = (direction === 'left') 
    ? 'https://image.flaticon.com/icons/svg/118/118739.svg'
    : 'https://image.flaticon.com/icons/svg/118/118740.svg';
  
  let arrowClass = clickable 
    ? 'sim-homes-arrow-on'
    : 'sim-homes-arrow-off';  

  return (
    <div className={`sim-homes-slide-arrow ${direction} ${arrowClass}`}
      onClick={clickFunction}>
      <img className={'sim-homes-arrow-image'} sgitrc={src}/>    
    </div>
  );
};

export default Arrow;