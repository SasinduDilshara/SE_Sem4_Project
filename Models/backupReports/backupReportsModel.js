Db = require("../../Core/DB.js");

var table = "backupreports";
var ID = "id";//primary key

exports.getAll = () => {
    return Db.getAll(table).then((results) => {
        console.log(results)
        return results;
    });

};

// this.getAll();
exports.getById = (id) => {
    return Db.getByColumn(table, { "column": ID, "body": id }).then((results) => {
        console.log(results);
        return results;
    });

};
// this.getById(3);


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
// this.delete(3);


exports.insert = (data) => {
    return Db.insert(table, data).then((results) => {
        console.log(results)
        return results;
    });

};
// this.insert([3, 202910]);