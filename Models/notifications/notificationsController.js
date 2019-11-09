NotificationModel = require("./notificationsModel.js");


exports.getById = (req, res) => {
    NotificationModel.getById(req.params.id)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.getAll = (req, res) => {
    NotificationModel.getAll()
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.update = (req, res) => {
    NotificationModel.update(req.body, req.params.id)
        .then((result) => {
            res.status(200).send(result);
        });
};


exports.delete = (req, res) => {
    NotificationModel.delete(req.params.id)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.insert = (req, res) => {
    NotificationModel.insert(req.body)
        .then((result) => {
            res.status(200).send(result);
        });
};
