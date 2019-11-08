BackupModel = require("./patientsModel.js");


exports.getById = (req, res) => {
    BackupModel.getById(req.params.userId)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.getAll = (req, res) => {
    BackupModel.getAll()
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.update = (req, res) => {
    BackupModel.update(req.body, req.params.userId)
        .then((result) => {
            res.status(200).send(result);
        });
};


exports.delete = (req, res) => {
    BackupModel.delete(req.params.userId)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.insert = (req, res) => {
    BackupModel.insert(req.body)
        .then((result) => {
            res.status(200).send(result);
        });
};
