const Notifications = require('./notificationsController');


exports.routesConfig = function (app) {
    console.log(Notifications.getAll);
    app.post('/notification/add', [
        Notifications.insert
    ]);
    app.get('/notifications', [
        Notifications.getAll

    ]);
    app.get('/notification/:id', [
        Notifications.getById
    ]);
    app.put('/notification/update/:id', [
        Notifications.update
    ]); 
    app.delete('/notification/delete/:id', [
        Notifications.delete
    ]);

};