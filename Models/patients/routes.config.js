const PatientsController = require('./patientsController');


exports.routesConfig = function (app) {
    console.log(PatientsController.getAll);
    app.post('/patient/add', [
        PatientsController.insert
    ]);
    app.get('/patients', [
        PatientsController.getAll

    ]);
    app.get('/patient/:patientId', [
        PatientsController.getById
    ]);
    app.put('/patient/update/:patientId', [
        PatientsController.update
    ]); app.delete('/patient/delete/:patientId', [
        PatientsController.delete
    ]);

};