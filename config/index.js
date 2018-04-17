var configValues = require('./config');
module.exports = {
    getDbConnectionString: function(){
        return 'mongodb://' +
            configValues.uname + ':' +
            configValues.pwd +
            '@ds125479.mlab.com:25479/tarots_0617';
    }
}
