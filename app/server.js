
const express = require("express");
const path = require("path");
const apiRoutes = require("./routing/apiRoutes");
const htmlRoutes = require("./routing/htmlRoutes")
const cors = require('cors');

// create a variable to call the express server
const app = express();

// Set port to use for listener
const PORT = process.env.PORT || 8080;

// Set up the express app to handle data parsing
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER - give the server a map of how to respond when the below URLs are hit
app.use(apiRoutes);
app.use(htmlRoutes);


// Start the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });