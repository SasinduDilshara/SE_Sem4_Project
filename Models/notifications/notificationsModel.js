Db = require("../../Core/DB.js");

var table = "notificattions";
var ID = "id";//primary key

exports.getAll = () => {
    return Db.getAll(table).then((results) => {
        return results;
    });

};


exports.getById = (id) => {
    return Db.getByColumn(table, { "column": ID, "body": id }).then((results) => {
        return results;
    });
};
// this.getById(7);


exports.update = (data, filter) => {
    return Db.update(table, data, { "column": ID, "body": filter }).then((results) => {
        //results
        return results;
    });

};
// this.update(['birthday'], ['19/12/1997'], 1);


exports.delete = (id) => {
    return Db.delete(table, { "column": ID, "body": id }).then((results) => {
        //results;
        return results;
    });

};
// this.delete(4);


exports.insert = (data) => {
    return Db.insert(table, data).then((results) => {
        //results
        return results;
    });

};
// this.insert([1, 'a', 'b', 'c', 1, 'g']);