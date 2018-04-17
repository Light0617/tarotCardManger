var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tarotSchema = new Schema({
    title: String,
    name: String,
    general: String,
    advice: String,
    img: String,
    type: String,
    card_id: Number
});
var Tarots = mongoose.model('Tarots', tarotSchema);

module.exports = Tarots;
