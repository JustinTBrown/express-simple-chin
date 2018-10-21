if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}

const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const db = require("./config/db");

const app = express();

// This checks if PORT is already set (ie. it is on heroku), if not it uses 8000
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(
  db.url,
  { useNewUrlParser: true }, // To avoid deprecation warning
  (err, client) => {
    if (err) return console.log(err);
    database = client.db("simple-express-chin");
    require("./app/routes")(app, database);

    app.listen(port, () => {
      console.log("We are live on " + port);
    });
  }
);
