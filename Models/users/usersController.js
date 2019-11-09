UserModel = require("./usersModel.js");


exports.getById = (req, res) => {
    UserModel.getById(req.params.userId)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.getAll = (req, res) => {
    UserModel.getAll()
        .then((result) => {
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
    UserModel.insert(req.body)
        .then((result) => {
            res.status(200).send(result);
        });
};
