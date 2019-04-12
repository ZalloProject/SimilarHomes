/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import moment from "moment";
import style from "../style.css";

const createHomeSlide = (homes, index) => {
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
            src="https://s3-us-west-1.amazonaws.com/zallosimilarhomes/ZalloHeart.png"
            alt="Similar Home"
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

const SimilarHomeSlide = ({ homeData, index }) => {
  if (homeData.length === 1) {
    return createHomeSlide(homeData, 0);
  }
  return (
    <div className={style.similarHomesSlidesContainer}>
      {createHomeSlide(homeData, index)}
      {createHomeSlide(homeData, index + 1)}
    </div>
  );
};

export default SimilarHomeSlide;
