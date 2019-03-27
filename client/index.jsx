import React from 'react';
import ReactDOM from 'react-dom';

import SimilarHomeSlide from './components/SimilarHomeSlide.jsx';

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
        listingType: 'Sale',
        createdAt: '2019-03-27T02:59:14.416+00:00',
        pictureURL: 'https://s3-us-west-1.amazonaws.com/zallosimilarhomes/099.jpg'
      }
    };
  }

  componentDidMount() {
    fetch('/similarHomes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.currentHome)
    })
      .then((response) => response.json())
      .then((myJson) => (this.setState({
        homesData: myJson
      })));
  }

  render() {
    return (<div className="similar-homes-carousel">
      <SimilarHomeSlide homeData={this.state.currentHome}/>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));