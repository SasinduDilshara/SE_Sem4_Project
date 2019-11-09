LabReportModel = require("./labReportsModel.js");


exports.getById = (req, res) => {
    LabReportModel.getById(req.params.id)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.getAll = (req, res) => {
    LabReportModel.getAll()
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.update = (req, res) => {
    LabReportModel.update(req.body, req.params.id)
        .then((result) => {
            res.status(200).send(result);
        });
};


exports.delete = (req, res) => {
    LabReportModel.delete(req.params.id)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.insert = (req, res) => {
    LabReportModel.insert(req.body)
        .then((result) => {
            res.status(200).send(result);
        });
};
