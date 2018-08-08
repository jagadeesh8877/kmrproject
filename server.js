var express = require('express'),
  //multer = require('multer');
  //upload = multer();
  app = express(),
  port = process.env.PORT || 8088,
  mongoose = require('mongoose'),
  DataModel = require('./api/models/studentModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/AirSenseDB'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.set('view engine', 'pug');
app.set('views','./api/views');

//app.use(upload.array()); 
//app.use(express.static('public'));


var routes = require('./api/routes/studentRoutes'); //importing route
routes(app); //register the route


app.listen(port);

//app.use('/static',express.static('./api/static'));


console.log('Studentid API server started on: ' + port);