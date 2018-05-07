var Tarots = require('../models/tarotModel');
var Users = require('../models/userModel');

var msg = require('../models/greeting');

var bodyParser = require('body-parser');

var crypto = require('crypto');

var express = require('express');
var app = express();


//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var passport = require('passport');



app.set('view engine', 'ejs');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));
    this.serverCards = null;
    Tarots.find({'type' : 'Major'}).sort('card_id').exec(function(err, CardMajors){
        if(err) throw err;
        Tarots.find({'type' : 'wand'}).sort('card_id').exec(function(err, CardWands){
            if(err) throw err;
            Tarots.find({'type' : 'cup'}).sort('card_id').exec(function(err, CardCups){
                if(err) throw err;
                Tarots.find({'type' : 'sword'}).sort('card_id').exec(function(err, CardSwords){
                    if(err) throw err;
                    Tarots.find({'type' : 'pentacle'}).sort('card_id').exec(function(err, CardPentacles){
                        if(err) throw err;
                        this.serverCards = ({ 'majors': CardMajors,
                                            'wands':CardWands,
                                            'cups':CardCups ,
                                            'swords':CardSwords,
                                            'pentacles' : CardPentacles});
                    });
                });
            });
        });
    });

    app.get('/api/tarots/', function(req, res){
        res.render('index', {serverCards : this.serverCards});
    });

    app.post('/api/tarots/signUp', function(req, res){

        Users.register(req, res);
        // if(req.body.id) {
        //     Users.findByIdAndUpdate(req.body.id, {
        //         email: req.body.userEmail,
        //         password: req.body.password
        //     }, function(err, todo){
        //         if(err) throw err;
        //         res.send('signUp Fail');
        //     });
        // }else{
        //     //new creation
        //     var newUser = ({
        //         email: req.body.userEmail,
        //         password: req.body.password
        //     });
        //     Users.create(newUser, function(err, results){
        //         res.render('index', {serverCards : this.serverCards})
        //     });
        // }
    });


    app.post('/api/tarots/signIn', function(req, res){
        if(req.body.id) {
            Users.Users.findByIdAndUpdate(req.body.id, {
                email: req.body.email,
                password: req.body.password
            }, function(err, todo){
                if(err) throw err;
                res.send('signIn Fail');
            });
        }else{
            //new creation
            var newUser = ({
                email: req.body.email,
                password: req.body.password
            });
            Users.Users.create(newUser, function(err, results){
                res.render('index', {serverCards : this.serverCards})
            });
        }
    });

    app.get('/api/tarot/:uname', function(req, res){
        Tarots.find({name : req.params.uname},function(err, tarot){
            if(err) throw err;
            res.send(tarot);
        });
    });


    app.delete('/api/tarot', function(req, res){
        Tarots.findByIdAndRemove(req.body.id, function(err){
            if(err) throw err;
            res.send('Success');
        });
    });
}
