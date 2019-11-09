LabAssistantModel = require("./labAssistantssModel.js");


exports.getById = (req, res) => {
    LabAssistantModel.getById(req.params.userId)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.getAll = (req, res) => {
    LabAssistantModel.getAll()
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.update = (req, res) => {
    LabAssistantModel.update(req.body, req.params.userId)
        .then((result) => {
            res.status(200).send(result);
        });
};


exports.delete = (req, res) => {
    LabAssistantModel.delete(req.params.userId)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.insert = (req, res) => {
    LabAssistantModel.insert(req.body)
        .then((result) => {
            res.status(200).send(result);
        });
};
