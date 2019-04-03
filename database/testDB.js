const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://zalloSimHomes:zalloPass@zallocluster0-89hrd.mongodb.net/test?retryWrites=true",
  { useNewUrlParser: true }
);

const testSchema = mongoose.Schema({
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

const Test = mongoose.model("Test", testSchema);

const getSimilarHomes = (home, cb) => {
  Test.find({ zip: home.zip }, null, { sort: { price: 1 } }, (err, docs) => {
    if (docs.length <= 3) {
      cb(null, docs);
    } else {
      cb(
        null,
        docs.filter(
          doc => doc.price >= home.price * 0.8 && doc.price <= home.price * 1.2
        )
      );
    }
  });
};

module.exports.getSimilarHomes = getSimilarHomes;
