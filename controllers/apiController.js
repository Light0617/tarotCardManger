var Tarots = require('../models/tarotModel');
var Users = require('../models/userModel');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    app.get('/api/tarots/', function(req, res){
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
                            res.render('index', {
                                                serverCards : { 'majors': CardMajors,
                                                                'wands':CardWands,
                                                                'cups':CardCups ,
                                                                'swords':CardSwords,
                                                                'pentacles' : CardPentacles}
                                                });
                        });
                    });
                });
            });
        });
    });

    app.get('/api/tarots/login', (req, res) => {
      res.render('login', {
        result: 'Hey',
        });
    })
    app.post('/api/tarots/login', function(req, res){
        if(req.body.id) {
            Users.findByIdAndUpdate(req.body.id, {
                username: req.body.username,
                password: req.body.password
            }, function(err, todo){
                if(err) throw err;
                res.send('Fail');
                res.render('login', {
                    result: 'Fail',
                });
            });
        }else{
            //new creation
            var newUser = ({
                username: req.body.username,
                password: req.body.password
            });
            Users.create(newUser, function(err, results){
                res.send('Success');
                res.render('login', {
                    username: req.body.username,
                    password: req.body.password,
                    result: 'Success',
                });
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
