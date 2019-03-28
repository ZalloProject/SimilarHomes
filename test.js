const request = require('supertest');
const app = require('./server/index');

describe('Testing server response', () => {

  let testHome = {
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

  test('It should respond to a POST request with an array', () => {
    return request(app)
      .post('/similarHomes')
      .send(testHome)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        Array.isArray(res.body);

      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }  
        done();
      });
  });
});