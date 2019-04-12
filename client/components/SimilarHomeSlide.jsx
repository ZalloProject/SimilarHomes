/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import moment from "moment";
import style from "../style.css";

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
    ? "https://s3-us-west-1.amazonaws.com/zallosimilarhomes/ZalloHeartSaved.png"
    : "https://s3-us-west-1.amazonaws.com/zallosimilarhomes/ZalloHeart.png";

  return (
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
        <span className={style.simHomesHeartSpan}>
          <img
            className={style.simHomesHeart}
            src={imgSrc}
            alt="Similar Home"
            onClick={save.bind(null, index)}
          />
        </span>
      </span>
      <span className={style.simHomesLine2}>
        <span className={style.simHomesDot} />
        <span className={style.simHomesListingType}>
          FOR {homes[index].listingType.toUpperCase()}
        </span>
      </span>
      <span className={style.simHomesLine3}>
        <span className={style.simHomesPrice}>
          {formatter.format(homes[index].price).split(".00")[0]}
        </span>
        <span className={style.simHomesDetails}>
          {homes[index].beds}
          {" bds ·"}
          {homes[index].baths}
          {" ba ·"}
          {homes[index].size.toLocaleString(undefined, {
            minimumFractionDigits: 0
          })}
          {" ..."}
        </span>
      </span>
      <span className={style.simHomesAddress}>
        {homes[index].address}
        {", "}
        {homes[index].city}
        {", "}
        {homes[index].state} {homes[index].zip}
      </span>
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
