/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import style from "../style.css";

const Arrow = ({ direction, clickFunction, clickable }) => {
  const src =
    direction === "left"
      ? "https://s3-us-west-1.amazonaws.com/zallosimilarhomes/left-arrow.png"
      : "https://s3-us-west-1.amazonaws.com/zallosimilarhomes/right-arrow.png";

  const arrowClass = clickable ? "simHomesArrowOn" : "simHomesArrowOff";

  return (
    <div
      className={[
        style.simHomesSlideArrow,
        style[direction],
        style[arrowClass]
      ].join(" ")}
      onClick={clickFunction}
    >
      <img className={style.simHomesArrowImage} src={src} alt="Previous Home" />
    </div>
  );
};

export default Arrow;
