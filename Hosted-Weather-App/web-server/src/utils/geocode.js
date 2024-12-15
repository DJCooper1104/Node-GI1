const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/search/geocode/v6/forward?q=" +
    encodeURIComponent(address) +
    "&access_token=pk.eyJ1IjoiY2hhcnJpc2phY2tzb24iLCJhIjoiY200Z2hsb3Q1MWpmOTJqcHZpdW5lNTQ5MCJ9.DNnOHe0Wb1_igkcvCYdaSA&limit=1";

  request({ url, json: true }, (error,  response ) => {
    if (error) {
      callback("unable to connect to location services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("unable to find location. try another search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].properties.coordinates.latitude,
        longitude: response.body.features[0].properties.coordinates.longitude,
        location: response.body.features[0].properties.full_address,
      });
    }
  });
};

module.exports = geocode;
