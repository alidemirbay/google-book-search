const express = require("express");
const app = express();
const mongoose = require('mongoose');
const routes = require("./routes")

const PORT = process.env.PORT || 3001;
//To use .env file on localserver
// require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function (req, res) { res.sendFile(path.join(__dirname, "./client/build/index.html")); });

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksdb",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
