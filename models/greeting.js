module.exports.log = function (req, res) {
    res.send('hi');
};

/*

this line of code re-assigns

module.exports
*/
greeting = {msg : 'hi'};
module.exports.greeting = greeting;
