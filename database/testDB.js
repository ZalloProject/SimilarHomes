const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useNewUrlParser: true });
const data = require('./sampleData.js');

let testSchema = mongoose.Schema({
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

let Test = mongoose.model('Test', testSchema);

const getSimilarHomes = (home, cb) => {
  Test.find({ zip: home.zip}, null, {sort: {price: 1}}, (err, docs) => {
    if (docs.length <= 3) {
      cb(null, docs);
    } else {
      cb(null, docs.filter(doc => (
        doc.price >= home.price * 0.8 && doc.price <= home.price * 1.2
      )));
    }
  });
};


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
  Test.insertMany(houses, (err) => console.log('done'));

  // let house = new SimilarHome ({
  //   address: '883 E Constitution Dr.',
  //   city: 'Chandler',
  //   zip: '85225',
  //   state: 'AZ',
  //   price: 320000,
  //   beds: 5,
  //   baths: 3,
  //   listingType: 'Sale',
  //   createdAt: '2019-03-27T02:59:14.416+00:00',
  //   pictureURL: 'https://s3-us-west-1.amazonaws.com/zallosimilarhomes/101.jpg'
  // });


  // house.save((err, results) => {
  //   console.log('inserted');
  // });

};

const deleteAll = (cb) => {
  Test.deleteMany({}, () => {
    cb();
  });
};

module.exports.deleteAll = deleteAll;
module.exports.getSimilarHomes = getSimilarHomes;
module.exports.insertSampleData = insertSampleData;