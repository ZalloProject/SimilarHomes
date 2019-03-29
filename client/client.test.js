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

const home3 = {
  address: '1137 W Butler Ct.',
  city: 'Chandler',
  zip: '85225',
  state: 'AZ',
  price: 275000,
  beds: 3,
  baths: 2,
  listingType: 'Sale',
  createdAt: '2019-02-24T02:59:14.416+00:00',
  pictureURL: 'https://s3-us-west-1.amazonaws.com/zallosimilarhomes/050.jpg'
};

const getHomes = () => {
  return new Promise((resolve, reject) => resolve([home1, home2, home3]));
};

// const next = (wrapper) => {
//   wrapper.setState({currentIndex: 1});
// };

// const previous = (wrapper) => {
//   wrapper.setState({currentIndex: 0});
// };

describe('Main Similar Homes Component', () => {

  it('should be selectable by class "similar-homes-carousel"', () => {
    expect(shallow(<App getHomes={getHomes}/>).is('.similar-homes-carousel')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<App getHomes={getHomes}/>).find('.similar-homes-carousel').length).toBe(1);
  });

  describe('State CurrentIndex changing functions', () => {
    
    it('should change currentIndex of state when run', () => {
      const wrapper = shallow(<App getHomes={getHomes}/>); 
      wrapper.setState({'homesData': [home1, home2, home3]});
      wrapper.instance().nextHouse();
      expect(wrapper.state('currentIndex')).toEqual(1);
      wrapper.instance().previousHouse();
      expect(wrapper.state('currentIndex')).toEqual(0);
    });

  });

});

describe('Arrow Component', () => {

  it('should be selectable by class "slide-arrow left"', () => {
    expect(shallow(<Arrow direction='left' icon='<' />).is('.slide-arrow')).toBe(true);
  });
  
  it('should mount in a full DOM', () => {
    expect(mount(<Arrow direction='left' icon='<'/>).find('.left').length).toBe(1);
  });
  
  it('should render to static HTML', () => {
    expect(render(<Arrow direction='left' icon='<'/>).text()).toEqual('<');
  });

  it('should be selectable by class "slide-arrow right"', () => {
    expect(shallow(<Arrow direction='right' icon='>' />).is('.slide-arrow')).toBe(true);
  });
  
  it('should mount in a full DOM', () => {
    expect(mount(<Arrow direction='right' icon='>'/>).find('.right').length).toBe(1);
  });

  it('should render to static HTML', () => {
    expect(render(<Arrow direction='right' icon='>'/>).text()).toEqual('>');
  });

  it('should change the state when clicked', () => {
    const outerWrap = shallow(<App getHomes={getHomes}/>);
    outerWrap.setState({'homesData': [home1, home2, home3]});
    const instanceOuterWrap = outerWrap.instance();
    const innerWrap1 = shallow(<Arrow direction='left' clickFunction={instanceOuterWrap.previousHouse} icon='<'/>);
    const innerWrap2 = shallow(<Arrow direction='right' clickFunction={instanceOuterWrap.nextHouse} icon='>'/>);
    innerWrap2.find('.right').simulate('click');
    expect(outerWrap.state('currentIndex')).toEqual(1);
    innerWrap1.find('.left').simulate('click');
    expect(outerWrap.state('currentIndex')).toEqual(0);
  });

});

describe('Slide Component', () => {

  it('should be selectable by class "similar-home-slide"', () => {
    expect(shallow(<SimilarHomeSlide homeData={[home1, home2]} index={0}/>).is('.similar-homes-slides-container')).toBe(true);
  });
  
  it('should mount in a full DOM', () => {
    expect(mount(<SimilarHomeSlide homeData={[home1, home2]} index={0}/>).find('.similar-home-slide').length).toBe(2);
  });
  
});
  