/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import moment from "moment";
import style from "./style.css";

const createHomeSlide = (homes, index, save) => {
  const styles = {
    backgroundImage: `url(${homes[index].pictureURL})`,
    width: "312px",
    height: "170px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  const imgSrc = homes[index].saved
    ? "../assets/heartSaved.png"
    : "../assets/heartUnsaved.png";

  return (
    <div className={style.simHomesContainer}>
    <div className={style.similarHomeSlide} style={styles}>
      <span className={style.simHomesDays}>
        <span>
          {
            moment(homes[index].createdAt)
              .fromNow()
              .split("ago")[0]
          }{" "}
          on Zallo
        </span>
      </span>
      <span className={style.simHomesHeartSpan}>
        <img
          className={style.simHomesHeart}
          src={imgSrc}
          alt="Similar Home"
          onClick={save.bind(null, index)}
        />
      </span>
    </div>
    <div className={style.simHomesTextArea}>
      <span className={style.simHomesLine2}>
        <span className={style.simHomesDot} />
        <span className={style.simHomesListingType} />
      </span>
      <span className={style.simHomesLine3}>
        <span className={style.simHomesPrice}>
          {formatter.format(homes[index].price).split(".00")[0]}
        </span>
      </span>
      <span className={style.simHomesDetails}>
          {homes[index].beds}
          {" bds ·"}
          {homes[index].baths}
          {" ba ·"}
          {homes[index].size.toLocaleString(undefined, {
            minimumFractionDigits: 0
          })}
          {` sqft - House for ${homes[index].listingType}`}
        </span>
      <span className={style.simHomesAddress}>
        {homes[index].address}
        {", "}
        {homes[index].city}
        {", "}
        {homes[index].state} {homes[index].zip}
      </span>
    </div>
  </div>
  );
};

const SimilarHomeSlide = ({ homes, index, save }) => {
  if (homes.length === 1) {
    return createHomeSlide(homes, 0, save);
  }
  return (
    <div className={style.similarHomesSlidesContainer}>
      {createHomeSlide(homes, index, save)}
      {createHomeSlide(homes, index + 1, save)}
    </div>
  );
};

export default SimilarHomeSlide;
