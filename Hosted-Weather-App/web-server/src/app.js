const path = require("path"); //built in no need to install
const express = require("express");
const port = process.env.PORT || 3000; //access heroku environment variable and default 3000 port
const app = express();
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
//define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather Forecast",
    name: " Darrell Cooper",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Darrell Cooper",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    message: "Do you need help?",
    name: "Darrell Cooper",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Must provide an address",
    });
  }
  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }
        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "you must provide a search term",
    });
  }
  console.log(req.query.search);
  res.send({
    forecast: "It is snowing",
  });
});

app.get("/help/*", (req, res) => {
  res.render("error", {
    title: "404 help",
    name: "Darrell Cooper",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("error", {
    title: "404",
    name: "Darrell Cooper",
    errorMessage: "Page not found",
  });
});

// app.listen(port, () => {
//   console.log("server is up in port" + port);
// });

app.listen(3000, () => {
  console.log("server is up in port");
});
