/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import React from "react";

import Arrow from "./Arrow/Arrow.jsx";
import SimilarHomeSlide from "./SimilarHomeSlide/SimilarHomeSlide.jsx";
import style from "../style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homesData: [],
      currentHome: {
        address: "883 E Constitution Dr.",
        city: "Chandler",
        zip: "85225",
        state: "AZ",
        price: 320000,
        beds: 5,
        baths: 3,
        size: 2845,
        listingType: "Sale",
        createdAt: "2019-03-27T02:59:14.416+00:00",
        pictureURL:
          "https://s3-us-west-1.amazonaws.com/zallosimilarhomes/099.jpg"
      },
      currentIndex: 0
    };
  }

  componentDidMount() {
    this.props
      .getHomes(this.state.currentHome)
      .then(response => response.json())
      .then(myJson => {
        myJson.forEach(home => Object.assign(home, { saved: false }));
        this.setState({
          homesData: myJson
        });
      })
      .catch(err => console.log(err));
  }

  previousHouse = () => {
    if (this.state.currentIndex > 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
  }

  nextHouse = () => {
    if (this.state.currentIndex < this.state.homesData.length - 2) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
  }

  saveHouse = (index) => {
    const { homesData } = this.state;
    homesData[index].saved = !homesData[index].saved;
    this.setState({
      homesData
    });
  }

  render() {
    return (
      <div className="similar-homes-container">
        <h1 className={style.similarHomesHeader}>Similar Homes For Sale</h1>
        <div className={style.similarHomesCarousel}>
          <Arrow
            direction="left"
            clickFunction={this.previousHouse}
            clickable={this.state.currentIndex > 0}
          />
          {this.state.homesData.length === 0 ? (
            <SimilarHomeSlide
              homes={[this.state.currentHome]}
              index={0}
              save={this.saveHouse}
            />
          ) : (
            <SimilarHomeSlide
              homes={this.state.homesData}
              index={this.state.currentIndex}
              save={this.saveHouse}
            />
          )}
          <Arrow
            direction="right"
            clickFunction={this.nextHouse}
            clickable={
              this.state.currentIndex < this.state.homesData.length - 2
            }
          />
        </div>
        <button className={style.similarHomesSeeAll} type="button">
          See all similar listings
        </button>
      </div>
    );
  }
}

export default App;
