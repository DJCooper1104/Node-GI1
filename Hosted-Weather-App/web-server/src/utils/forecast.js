const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherstack.com/current?access_key=0282ecce271ab41d7dbba34edf97797d&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("unable to find the location", undefined);
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          `. It is currently ` +
          response.body.current.temperature +
          ` degrees out. It feels like ` +
          response.body.current.feelslike +
          ` degrees out.`
      );
    }
  });
};
module.exports = forecast;
