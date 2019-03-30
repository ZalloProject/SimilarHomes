import React from 'react';

import Arrow from './Arrow.jsx';
import SimilarHomeSlide from './SimilarHomeSlide.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      homesData: [],
      currentHome: {
        address: '883 E Constitution Dr.',
        city: 'Chandler',
        zip: '85225',
        state: 'AZ',
        price: 320000,
        beds: 5,
        baths: 3,
        size: 2845,
        listingType: 'Sale',
        createdAt: '2019-03-27T02:59:14.416+00:00',
        pictureURL: 'https://s3-us-west-1.amazonaws.com/zallosimilarhomes/099.jpg'
      },
      currentIndex: 0
    };
    this.previousHouse = this.previousHouse.bind(this);
    this.nextHouse = this.nextHouse.bind(this);
  }

  componentDidMount() {
    this.props.getHomes(this.state.currentHome)
      .then((response) => response.json())
      .then((myJson) => (this.setState({
        homesData: myJson
      })));
  }

  previousHouse() {
    if (this.state.currentIndex > 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
  }

  nextHouse() {
    if (this.state.currentIndex < this.state.homesData.length - 2) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
  }

  render() {

    return (
      <div className='similar-homes-container'>
        <h1 className="similar-homes-header">Similar Homes For Sale</h1>
        <div className="similar-homes-carousel">
          <Arrow
            direction='left'
            clickFunction={ this.previousHouse }
            clickable={this.state.currentIndex > 0} 
          />
          {this.state.homesData.length === 0 
            ? <SimilarHomeSlide homeData={[this.state.currentHome]}
              index={0}/>
            : <SimilarHomeSlide homeData={this.state.homesData}
              index={this.state.currentIndex}/>
          }
          <Arrow
            direction="right"
            clickFunction={ this.nextHouse }
            clickable={this.state.currentIndex < this.state.homesData.length - 2} />
        </div>
        <button className='similar-homes-see-all'>See all similar listings</button>
      </div>
    );
  }
}

export default App;