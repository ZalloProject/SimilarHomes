import React from 'react';

const SimilarHomeSlide = ({homeData}) => {
  
  const styles = {
    backgroundImage: `url(${homeData.pictureURL})`,
    width: '312px',
    height: '170px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };
  
  return (<div className="similar-home-slide" style={styles}>
    <span>{homeData.createdAt}</span>
    <span>For {homeData.listingType}</span>
    <span>{homeData.price}</span><span> {homeData.beds}·{homeData.baths}·{homeData.size}</span>
    <span>{homeData.address}, {homeData.city}, {homeData.state}, {homeData.zip}</span>
  </div>);
};

export default SimilarHomeSlide;