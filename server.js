const express = require('express');
const req = require('express/lib/request');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const path = require('path');

//Port setup for local and production environment
const PORT = process.env.PORT || 3002;

//Start express server
const app = express();

//Middleware setup. Parse all incoming string.
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname+'/public')));

//Route requests to api and html pages
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//Pull up static page

//set port to list to

app.listen(PORT, () =>{console.log(`API server now on port ${PORT}`)});