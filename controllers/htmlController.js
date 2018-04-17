var Tarots = require('../models/tarotModel');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));
    app.get('/', function(req, res){
        res.render('head');
    });
}
