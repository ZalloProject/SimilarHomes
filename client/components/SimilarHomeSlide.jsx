import React from 'react';
import moment from 'moment';

const createHomeSlide = (homes, index) => {
  
  const styles = {
    backgroundImage: `url(${homes[index].pictureURL})`,
    width: '312px',
    height: '170px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (<div className="similar-home-slide" style={styles}>
    <span className="sim-homes-days"><span>{moment(homes[index].createdAt).fromNow().split('ago')[0]} on Zallo</span> <span ><img className="sim-homes-heart" src="https://s3-us-west-1.amazonaws.com/zallosimilarhomes/ZalloHeart.png"/></span> </span>
    <span className="sim-homes-line2"><span className="sim-homes-dot"></span> <span className="sim-homes-listing-type">FOR {(homes[index].listingType).toUpperCase()}</span></span>
    <span className="sim-homes-line3"><span className="sim-homes-price">{formatter.format(homes[index].price).split('.00')[0]}  </span><span className="sim-homes-details"> {homes[index].beds} bds · {homes[index].baths} ba · {(homes[index].size).toLocaleString(undefined, {minimumFractionDigits: 0})} ...</span></span>
    <span className="sim-homes-address">{homes[index].address}, {homes[index].city}, {homes[index].state} {homes[index].zip}</span>
  </div>);
};


const SimilarHomeSlide = ({homeData, index}) => {
  
  if (homeData.length === 1) {
    return (createHomeSlide(homeData, 0));
  } else {
    return (<div className="similar-homes-slides-container">
      {createHomeSlide(homeData, index)} 
      {createHomeSlide(homeData, index + 1)} 
    </div>);
  }
};

export default SimilarHomeSlide;