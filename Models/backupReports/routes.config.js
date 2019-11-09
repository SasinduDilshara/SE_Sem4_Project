const backupReports = require('./backupReportsController');


exports.routesConfig = function (app) {
    console.log(backupReports.getAll);
    app.post('/backupReport/add', [
        backupReports.insert
    ]);
    app.get('/backupReports', [
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