const labAssistants = require('./labAssistantsController');


exports.routesConfig = function (app) {
    console.log(labAssistants.getAll);
    app.post('/labassistant/add', [
        labAssistants.insert
    ]);
    app.get('/labassistants', [
        labAssistants.getAll

    ]);
    app.get('/labassistant/:userId', [
        labAssistants.getById
    ]);
    app.put('/labassistant/update/:userId', [
        labAssistants.update
    ]);
    app.delete('/labassistant/delete/:userId', [
        labAssistants.delete
    ]);

};