const UsersController = require('./usersController');


exports.routesConfig = function (app) {
    app.post('/register', [
        UsersController.insert
    ]);
    app.get('/users', [
        UsersController.getAll

    ]);
    app.get('/user/:userId', [
        UsersController.getById
    ]);
    app.get('/user/email/:email', [
        UsersController.getByEmail
    ]);
    app.put('/update:userId', [
        UsersController.update
    ]); app.delete('/delete:userId', [
        UsersController.delete
    ]);

    app.post('/login', [
        UsersController.login
    ]);

};