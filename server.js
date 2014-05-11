// ======================================
// server.js
// ======================================

    var express        = require('express');
    var app            = express();
    var mongoose       = require('mongoose');
    var bodyParser     = require('body-parser');
    var methodOverride = require('method-override');
    var logger         = require('morgan');
    var port           = process.env.PORT || 3000;

    // database connection
    var database       = require('./config/db');
    mongoose.connect(database.url);

    // express setup
    app.use(express.static(__dirname + '/public'));
    app.use(logger('dev'));
    app.use(bodyParser());
    app.use(methodOverride());

// ======================================
// routes
// ======================================

    require('./app/routes')(app);

// ======================================
// run the server
// ======================================
    app.listen(port);
    console.log('app listening on http://localhost:3000/');