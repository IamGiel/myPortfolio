const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3005;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static(path.join(__dirname, "/client/build")));
// Add routes, both API and view

app.get("/", function(req, res) {
  res.send("/client/build/index.html");
});

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
//   {
//     // useMongoClient: true
//   }
// );

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
