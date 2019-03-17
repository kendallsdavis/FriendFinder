// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.
const path = require("path");
const express = require("express");
const app = express();

// set routes to handle when users visit the survey and home pages
// 
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
    });

module.exports = app;