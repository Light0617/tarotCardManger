var Tarots = require('../models/tarotModel');
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

    app.get('/api/tarot/:uname', function(req, res){
        Tarots.find({name : req.params.uname},function(err, tarot){
            if(err) throw err;
            res.send(tarot);
        });
    });

    app.post('/api/tarot', function(req, res){
        if(req.body.id) {
            Tarots.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function(err, todo){
                if(err) throw err;
                res.send('Success');
            });
        }else{
            //new creation
            var newTarot = tarots({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newTarot.save(function(err) {
                res.send('Success');
            });
        }
    });

    app.delete('/api/tarot', function(req, res){
        Tarots.findByIdAndRemove(req.body.id, function(err){
            if(err) throw err;
            res.send('Success');
        });
    });
}
