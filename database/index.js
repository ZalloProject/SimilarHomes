const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://zalloSimHomes:zalloPass@zallocluster0-89hrd.mongodb.net/test?retryWrites=true",
  { useNewUrlParser: true }
);

const similarHomesSchema = mongoose.Schema({
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

const SimilarHome = mongoose.model("SimilarHome", similarHomesSchema);

const getSimilarHomes = (home, cb) => {
  SimilarHome.find(
    { zip: home.zip },
    null,
    { sort: { price: 1 } },
    (err, docs) => {
      if (docs.length <= 3) {
        cb(null, docs);
      } else {
        cb(
          null,
          docs.filter(
            doc =>
              doc.price >= home.price * 0.8 && doc.price <= home.price * 1.2
          )
        );
      }
    }
  );
};

const getHomes = cb => {
  SimilarHome.find({}, null, { sort: { price: 1 } })
    .limit(101)
    .exec((err, docs) => cb(null, docs));
};

const getHomesInArea = (minLat, maxLat, minLong, maxLong, cb) => {
  SimilarHome.find({
    $and: [
      { lat: { $lte: maxLat } },
      { lat: { $gte: minLat } },
      { lng: { $lte: maxLong } },
      { lng: { $gte: minLong } }
    ]
  })
    .limit(101)
    .exec((err, docs) => cb(null, docs));
};

module.exports.getHomesInArea = getHomesInArea;
module.exports.getSimilarHomes = getSimilarHomes;
module.exports.getHomes = getHomes;
