/* eslint-disable no-undef */
const request = require("supertest");
const app = require("./index");
// const testDB = require('../database/testDB');

// beforeAll(() => {
//   testDB.deleteAll(() => {
//     testDB.insertSampleData();
//   });
// });

describe("Testing server response", () => {
  const testHome = {
    address: "883 E Constitution Dr.",
    city: "Chandler",
    zip: "85225",
    state: "AZ",
    price: 320000,
    beds: 5,
    baths: 3,
    size: 2875,
    listingType: "Sale",
    createdAt: "2019-03-27T02:59:14.416+00:00",
    pictureURL: "https://s3-us-west-1.amazonaws.com/zallosimilarhomes/099.jpg"
  };

  test("It should respond to a POST request with an array", () => {
    return request(app)
      .post("/test")
      .send(testHome)
      .set("Accept", "application/json")
      .expect(res => {
        if (!Array.isArray(res.body)) {
          throw new Error("response is not an array");
        }
        if (res.body[0].zip !== "85225") {
          throw new Error("response contains house with a different zip code");
        }
      });
  });
});
