var setupControllerMajors = require('./setupControllerMajors');
var setupControllerWands = require('./setupControllerWands');
var setupControllerCups = require('./setupControllerCups');
var setupControllerSwords = require('./setupControllerSwords');
var setupControllerPentacles = require('./setupControllerPentacles');

module.exports = function(app){
    app.get('/api/setupTarots', function(req, res){
        setupControllerMajors(app);
        setupControllerWands(app);
        setupControllerCups(app);
        setupControllerSwords(app);
        setupControllerPentacles(app);
        res.send('Success!!');
    });
}
