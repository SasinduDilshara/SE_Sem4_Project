const labreports = require('./labreportsController');


exports.routesConfig = function (app) {
    console.log(labreports.getAll);
    app.post('/labreport/add', [
        labreports.insert
    ]);
    app.get('/labreports', [
        labreports.getAll

    ]);
    app.get('/labreport/:id', [
        labreports.getById
    ]);
    app.put('/labreport/update/:id', [
        labreports.update
    ]); 
    app.delete('/labreport/delete/:id', [
        labreports.delete
    ]);

};