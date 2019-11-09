const labAssistants = require('./labAssistantsController');


exports.routesConfig = function (app) {
    console.log(labAssistants.getAll);
    app.post('/labassistant/add', [
        labAssistants.insert
    ]);
    app.get('/labassistants', [
        labAssistants.getAll

    ]);
    app.get('/labassistant/:id', [
        labAssistants.getById
    ]);
    app.put('/labassistant/update/:id', [
        labAssistants.update
    ]); 
    app.delete('/labassistant/delete/:id', [
        labAssistants.delete
    ]);

};