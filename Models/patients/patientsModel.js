Db = require("../../Core/DB.js");

var table = "patients";
var ID = "patientId";//primary key

exports.getAll = () => {
    return Db.getAll(table).then((results) => {
        console.log(results)
        return results;
    });

};


exports.getById = (id) => {
    return Db.getByColumn(table, { "column": ID, "body": id }).then((results) => {
        console.log(results);
        return results;
    });

};
// this.getById(7);


exports.update = (data, filter) => {
    return Db.update(table, data, { "column": ID, "body": filter }).then((results) => {
        console.log(results)
        return results;
    });

};
// this.update(['birthday'], ['19/12/1997'], 1);


exports.delete = (id) => {
    return Db.delete(table, { "column": ID, "body": id }).then((results) => {
        console.log(results);
        return results;
    });

};
// this.delete(4);


exports.insert = (data) => {
    return Db.insert(table, data).then((results) => {
        console.log(results)
        return results;
    });

};
// this.insert([4, 'a', 'b']);