import React from 'react';


const createHomeSlide = (homes, index) => {
  
  const styles = {
    backgroundImage: `url(${homes[index].pictureURL})`,
    width: '312px',
    height: '170px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };

  return (<div className="similar-home-slide" style={styles}>
    <span>{homes[index].createdAt}</span>
    <span>For {homes[index].listingType}</span>
    <span>{homes[index].price}</span><span> {homes[index].beds}·{homes[index].baths}·{homes[index].size}</span>
    <span>{homes[index].address}, {homes[index].city}, {homes[index].state}, {homes[index].zip}</span>
  </div>);
};


const SimilarHomeSlide = ({homeData, index}) => {
  
  if (homeData.length === 1) {
    return (createHomeSlide(homeData, 0));
  } else {
    return (<div>
      {createHomeSlide(homeData, index)} 
      {createHomeSlide(homeData, index + 1)} 
    </div>);
  }
};

export default SimilarHomeSlide;