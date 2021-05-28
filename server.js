// https://lo-victoria.com/build-rest-api-with-nodejs-design-and-plan-restful-api

const express = require("express");
const routes = require("./routes/tea");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(express.json()); // parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Allows x-www-form-urlencoded key-value
app.use('/uploads', express.static('./uploads'));
app.use("/", routes);

mongoose.connect(
  process.env.MONGODB_URI,
  { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
  (err) => {
    if (err) return console.log("Error: ", err);
    console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
  }
);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('App is listening on port ' + listener.address().port)
});
