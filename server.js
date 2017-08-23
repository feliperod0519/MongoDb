var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    moment = require('moment'),
    multer = require('multer');
var mongoose = require('mongoose');
var router = express.Router();
router.get('/', function (req, res)
{
    res.render('index.handlebars');
});
router.param('image_id', function (req, res, next, image_id)
{
    console.log('image_id:' + image_id);
    req.image_id = image_id;
    next();
});
router.get('/images/:image_id', function (req, res)
{
    res.redirect('/');
});
app = express();
app.use(router);
app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
app.engine('handlebars', exphbs.create(
    {
        defaultLayout: 'main',
        layoutsDir: app.get('views') + '/layouts',
        partialsDir: [app.get('views') + '/partials']
    }).engine);
app.set('view engine', 'handlebars');
app.use(morgan('dev'));
app.use(bodyParser());
app.use(morgan('dev'));
app.use(bodyParser());
var promise = mongoose.createConnection('mongodb://localhost/imgLdr', { useMongoClient:true});
promise.then(function (db)
{
    mongoose.connection.openUri('mongodb://localhost/imgLdr');
    console.log('Connection ok');
});
//mongoose.connect('mongodb://localhost/imgLdr');
//mongoose.connection.on('open', function () { console.log('Connection ok') });

var server = app.listen(app.get('port'), function () { console.log('Server listening on ' + app.get('port')); });