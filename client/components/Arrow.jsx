import React from 'react';
import style from '../style.css';

const Arrow = ({direction, clickFunction, clickable}) => {

  let src = (direction === 'left')
    ? 'https://s3-us-west-1.amazonaws.com/zallosimilarhomes/left-arrow.png'
    : 'https://s3-us-west-1.amazonaws.com/zallosimilarhomes/right-arrow.png';

  let arrowClass = clickable
    ? 'simHomesArrowOn'
    : 'simHomesArrowOff';

  return (
    <div className={[style.simHomesSlideArrow, style[direction], style[arrowClass]].join(' ')}
      onClick={clickFunction}>
      <img className={style.simHomesArrowImage} src={src}/>
    </div>
  );
};

export default Arrow;
