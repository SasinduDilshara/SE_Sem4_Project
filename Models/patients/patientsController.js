PatientModel = require("./patientsModel.js");


exports.getById = (req, res) => {
    PatientModel.getById(req.params.patientId)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.getAll = (req, res) => {
    PatientModel.getAll()
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.update = (req, res) => {
    PatientModel.update(req.body, req.params.patientId)
        .then((result) => {
            res.status(200).send(result);
        });
};


exports.delete = (req, res) => {
    PatientModel.delete(req.params.patientId)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.insert = (req, res) => {
    PatientModel.insert(req.body)
        .then((result) => {
            res.status(200).send(result);
        });
};
