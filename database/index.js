const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const data = require('./sampleData.js');

let similarHomesSchema = mongoose.Schema({
  address: {
    type: String,
    index: {
      unique: true,
      dropDups: true
    }
  },
  city: String,
  zip: String,
  state: String,
  price: Number,
  beds: Number,
  baths: Number,
  size: Number,
  listingType: String,
  createdAt: { type: Date, required: true, default: Date.now },
  pictureURL: String
});

let SimilarHome = mongoose.model('SimilarHome', similarHomesSchema);


//One time use function to get data into db.
let insertSampleData = () => {

  const houses = [];

  for (let i = 0; i < 100; i++) {

    let url;
    if (i < 9) {
      url = `00${i + 1}.jpg`;
    } else if (i < 99) {
      url = `0${i + 1}.jpg`;
    } else {
      url = '100.jpg';
    }

    let rand = Math.floor(Math.random() * 20);
    let house = {
      address: data.address[rand],
      city: data.city[rand],
      zip: data.zip[rand],
      state: data.state,
      price: data.price[rand],
      beds: data.beds[rand],
      baths: data.baths[rand],
      size: data.size[rand],
      listingType: 'Sale',
      pictureURL: data.pictureURL + url
    };
    houses.push(house);
    
  }
  SimilarHome.insertMany(houses, (err) => console.log('done'));

};

module.exports.insertSampleData = insertSampleData;