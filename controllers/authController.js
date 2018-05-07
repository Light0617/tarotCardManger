var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: String,
    hash: String,
    salt: String
});

userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};


module.exports.register = function(req, res) {
    var user = new User();

    user.email = req.body.email;

    user.setPassword(req.body.password);

    res.send('signUp');
    // user.save(function(err) {
    //     var token;
    //     token = user.generateJwt();
    //     res.status(200);
    //     res.json({
    //       "token" : token
    //     });
    // });
    // res.send('signUp');
};

module.exports.hi = function(req, res){
    res.send('hi');
}

module.exports.login = function(req, res) {
    passport.authenticate('local', function(err, user, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
        res.status(404).json(err);
        return;
    }

    // If a user is found
    if(user){
        token = user.generateJwt();
        res.status(200);
        res.json({
        "token" : token
        });
    } else {
        // If user is not found
        res.status(401).json(info);
        }
    })(req, res);

};
