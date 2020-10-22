require('dotenv').config();

var express = require('express');
var app = express();
var test = require('./controllers/testcontroller');
var user = require('./controllers/usercontroller');
var sequelize = require('./db');

sequelize.sync(); //tip: {force: true} for resetting tables

app.use(express.json( ));

app.use(require('./middleware/headers'));

app.use('/test', test)

app.use('/api/user', user);

app.listen(3000, function(){
    console.log('App is listening on localhost:3000')
});
