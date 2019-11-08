Db = require("../../Core/DB.js");

var table = "users";
var ID = "userId";//primary key

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

exports.getByEmail = (email) => {
    return Db.getByColumn(table, { "column": 'email', "body": email }).then((results) => {
        console.log(results)
        return results;
    });

};
// this.getByEmail('sasindu.17@cse.mrt.ac.lk');

exports.update = (columns, data, filter) => {
    return Db.update(table, columns, data, { "column": ID, "body": filter }).then((results) => {
        console.log(results)
        return results;
    });

};
// this.update(['email', 'password'], ['sasindu.17@cse.mrt.ac.lk', 1111], 1);


exports.delete = (id) => {
    return Db.delete(table, { "column": ID, "body": id }).then((results) => {
        console.log(results);
        return results;
    });

};
this.delete(4);


exports.insert = () => {
    return Db.insert(table).then((results) => {
        console.log(results)
        return results;
    });

};