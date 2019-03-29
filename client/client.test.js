import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from './components/App.jsx';
import Arrow from './components/Arrow.jsx';
import SimilarHomeSlide from './components/SimilarHomeSlide.jsx';

const home1 = {
  address: '883 E Constitution Dr.',
  city: 'Chandler',
  zip: '85225',
  state: 'AZ',
  price: 320000,
  beds: 5,
  baths: 3,
  listingType: 'Sale',
  createdAt: '2019-03-27T02:59:14.416+00:00',
  pictureURL: 'https://s3-us-west-1.amazonaws.com/zallosimilarhomes/099.jpg'
};

const home2 = {
  address: '831 E Gary Dr.',
  city: 'Chandler',
  zip: '85225',
  state: 'AZ',
  price: 280000,
  beds: 4,
  baths: 3,
  listingType: 'Sale',
  createdAt: '2019-03-24T02:59:14.416+00:00',
  pictureURL: 'https://s3-us-west-1.amazonaws.com/zallosimilarhomes/100.jpg'
};

const getHomes = (currentHome) => {
  return new Promise((resolve, reject) => resolve([home1, home2]));
};

describe('Main Similar Homes Component', function() {

  it('should be selectable by class "similar-homes-carousel"', function() {
    expect(shallow(<App getHomes={getHomes}/>).is('.similar-homes-carousel')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<App getHomes={getHomes}/>).find('.similar-homes-carousel').length).toBe(1);
  });

});

describe('Arrow Component', function() {

  it('should be selectable by class "slide-arrow left"', function() {
    expect(shallow(<Arrow direction='left' icon='<' />).is('.slide-arrow')).toBe(true);
  });
  
  it('should mount in a full DOM', function() {
    expect(mount(<Arrow direction='left' icon='<'/>).find('.left').length).toBe(1);
  });
  
  it('should render to static HTML', function() {
    expect(render(<Arrow direction='left' icon='<'/>).text()).toEqual('<');
  });

  it('should be selectable by class "slide-arrow right"', function() {
    expect(shallow(<Arrow direction='right' icon='>' />).is('.slide-arrow')).toBe(true);
  });
  
  it('should mount in a full DOM', function() {
    expect(mount(<Arrow direction='right' icon='>'/>).find('.right').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<Arrow direction='right' icon='>'/>).text()).toEqual('>');
  });
});

describe('Slide Component', function() {

  it('should be selectable by class "similar-home-slide"', function() {
    expect(shallow(<SimilarHomeSlide homeData={[home1, home2]} index={0}/>).is('.similar-homes-slides-container')).toBe(true);
  });
  
  it('should mount in a full DOM', function() {
    expect(mount(<SimilarHomeSlide homeData={[home1, home2]} index={0}/>).find('.similar-home-slide').length).toBe(2);
  });
  

});
  