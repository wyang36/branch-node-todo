const configValues = require('./config.json');

module.exports = {
    getDbConnectionString: () => {
        return `mongodb://${configValues.username}:${configValues.password}@ds147030.mlab.com:47030/branchtodo`
    }
}