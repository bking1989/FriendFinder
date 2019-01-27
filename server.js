// Define our NPM modules
var express = require("express");
var path = require("path");

// Shorthand for Express
var app = express();

// Define our virtual sever port
var PORT = process.env.PORT || 8080;

// Data parsing for our Express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

// HTML and API routing
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Listener for starting virtual server
app.listen(PORT, function () {
    console.log("App listening on Localhost:" + PORT);
});