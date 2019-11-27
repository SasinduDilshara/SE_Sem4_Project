const backupReports = require('./backupReportsController');
const verify = require("../../extended-privateRoutes/extended-privateRoutes")

exports.routesConfig = function (app) {
    console.log(backupReports.getAll);
    app.post('/backupReport/add', [
        backupReports.insert
    ]);
    app.get('/backupReports', verify, [
        backupReports.getAll

    ]);
    app.get('/backupReport/:id', [
        backupReports.getById
    ]);
    app.put('/backupReport/update/:id', [
        backupReports.update
    ]);
    app.delete('/backupReport/delete/:id', [
        backupReports.delete
    ]);

};