// import files and packages up here
const express = require('express');
var morgan = require('morgan');


// create your express server below
const app = express();
app.use(morgan('dev'));

// Imports the json data file
const topSpots = require('./data.json');

// add your routes and middleware below
app.get('/', (req, res) => {
    res.status(200).send('Sanity Check: Server is running!');
})

// Routes to return the topSpots json data.
app.get('/data', (req, res) => {
    res.json(topSpots);
})

// finally export the express application
module.exports = app;
