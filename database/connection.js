const configValues = require('./databaseConfig.json');

module.exports = {
  getDbConnectionString: function() {
    return 'mongodb://' + configValues.username + ':' + configValues.pass + '@ds141720.mlab.com:41720/trello-users';
  }
}
