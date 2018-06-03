const Tasks = require('../../database/models/taskModel');

module.exports = function(app) {

    app.post('/setupTasks/:username/:taskState/:taskContent', function(req, res) {

        const starterTasks = {
            username: req.params.username,
            taskState: req.params.taskState,
            taskContent: req.params.taskContent
        }

        Tasks.create(starterTasks, function(err, results) {
            if (err) throw err;
            res.send(results);
        });

    });
}
