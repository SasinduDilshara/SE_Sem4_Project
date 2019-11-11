UserModel = require("./usersModel.js");
currentUser = require('../../functions/functions.js');
exports.getById = (req, res) => {
    UserModel.getById(req.params.userId)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.getAll = (req, res) => {
    UserModel.getAll()
        .then((result) => {
            console.log(currentUser);
            res.status(200).send(result);
        });
};

exports.getByEmail = (req, res) => {
    UserModel.getByEmail(req.params.email)
        .then((result) => {
            res.status(200).send(result);
        });
};


exports.update = (req, res) => {
    console.log(req.params);
    UserModel.update(req.body, req.params.userId)
        .then((result) => {
            res.status(200).send(result);
        });
};


exports.delete = (req, res) => {
    UserModel.delete(req.params.userId)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.insert = (req, res) => {
    // console.log(req);
    UserModel.insert(req.body.userData)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.login = function (req, res) {
    console.log("My req", req);
    var email = req.body.email;
    var password = req.body.password;
    UserModel.getByEmail(email)
        .then((results) => {
            if (results.length > 0) {
                if (results[0].password == password) {
                    res.send({
                        "code": 200,
                        "success": "login sucessfull"
                    });
                }
                else {
                    res.send({
                        "code": 204,
                        "success": "Email and password does not match"
                    });
                }
            }
            else {
                res.send({
                    "code": 204,
                    "success": "Email does not exits"
                });
            }

        });
}

exports.logout = function (req, res) {
    currentUser.deleteUser;
    res.send("deleted user");
}
