const Users = require('../../database/models/userModel');

module.exports = function(app) {

    app.post('/setupUser/:username/:pass', function(req, res) {

        const newUser = {
            username: req.params.username,
            pass: req.params.pass
          };

        Users.create(newUser, function(err, results) {
          res.send(results);
        });

    });
}
