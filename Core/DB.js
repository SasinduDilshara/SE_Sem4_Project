const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
var database_Details = require('../Config/config.js');
app.use(bodyparser.json());//sure that bodyparse allow jsons.

var mysqlConnection = getdatabaseObject();

function getdatabaseObject() {
    if (mysqlConnection == null) {
        var mysqlConnection = mysql.createConnection(
            {
                host: database_Details.host,
                user: database_Details.databaseUser,
                password: database_Details.databasePassword,
                database: database_Details.databaseName,
                multipleStatements: true
            }
        );
        mysqlConnection.connect((err) => {
            if (err) {
                console.log(err, JSON.stringify(err, undefined, 2));
            }
            else {
                console.log("Ok")
            }
        });
    }
    return mysqlConnection;
}
//PORT
const port = 5000;

app.listen(port, () => console.log(`${port}`));

//get columns

function getColumns(table) {
    // console.log("table passed" + table)
    coloum_list = '';
    mysqlConnection.query(
        "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = " + "\'" + table + "\'" + " and table_schema = " + "\'" + database_Details.databaseName + "\'", (err, rows, fields) => {
            if (err) {
                console.log(err)
            }
            for (i = 0; i < rows.length; i++) {
                coloum_list += "," + rows[i].COLUMN_NAME;
            }
            coloum_list = coloum_list.slice(1);
            console.log(coloum_list + " Coloumns");
            return coloum_list;
            // }
        });
    return coloum_list;
}

function getAllData(table) {
    mysqlConnection.query("Select * from " + table, (err, rows, fields) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(rows);
            return rows;
        }
    });
}

// getAllData("users");

function getADataById(table, param, field = '') {
    mysqlConnection.query("Select * from " + table + " where " + param.column + "= ?", [param.body], (err, rows, fields) => {
        if (err) {
            console.log(err)
        }
        else {
            if (field == '') {
                console.log(rows);
                return rows;
            }
        }
    });

}

// getADataById('users', { "column": "email", "body": "sasindu.17@cse.mrt.ac.lk" });


function deleteAdata(table, param) {
    mysqlConnection.query("delete from " + table + " where " + param.column + "= ?", [param.body], (err, rows, fields) => {
        if (err) {
            console.log(err)
        }
        else {
        }
    });

}

// deleteAdata("users", { "column": "userId", "body": "7" });

function insertAdata(table, data) {
    coloum_list = '';
    ques = '';
    mysqlConnection.query(
        "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = " + "\'" + table + "\'" + " and table_schema = " + "\'" + database_Details.databaseName + "\'", (err, rows, fields) => {
            if (err) {
                // console.log(err)
                console.log("error");
            }
            // else {
            // res.send(rows);
            for (i = 0; i < rows.length; i++) {
                coloum_list += "," + rows[i].COLUMN_NAME;
                // console.log(coloum_list+"Column Namwes");
                ques += "," + "\'" + data[i] + "\'";
            }
            ques = ques.slice(1);
            coloum_list = coloum_list.slice(1);
            console.log(coloum_list + " Coloumns");
            mysqlConnection.query("INSERT INTO " + table + " ( " + coloum_list + " ) VALUES (" + ques + " )"
                , (err, rows, fields) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                    }
                });
            // }
        });


}

function updateAdata(table, columns, data, params) {

    query = '';
    for (i = 0; i < columns.length; i++) {
        query += " , " + columns[i] + " = " + "\"" + data[i] + "\"" + "";
    }
    query = query.slice(3);
    mysqlConnection.query("UPDATE " + table + " SET " + query + " WHERE " + params.column + " = ?;"
        , [params.value], (err, rows, fields) => {
            if (err) {
                console.log(err)
            }
            else {
                mysqlConnection.query("Select * from " + table, (err, rows, fields) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log(rows)
                        return rows;
                        // print rows
                    }
                });
            }
        });
}

module.exports.insert = insertAdata;
module.exports.getAll = getAllData;
module.exports.get = getADataById;
module.exports.delete = deleteAdata;
module.exports.update = updateAdata;



// updateAdata("labreports", ["content"], ["This is your report"], { "column": "id", "value": 1 });
// insertAdata('users', [7, 'aa', 'aa', 'aa', 'aa', 'aa', 'aa', 'aa']);




































































































































































































// insertAdata('users', [5, 'aa', 'aa', 'aa', 'aa', 'aa', 'aa', 'aa']);

//}

// // getColumns("users");

// //SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'users' and table_schema = 'Se_sem4_Project';

// //get all data

// function getAllData(table, link) {
//     app.get(link, (req, res) => {
//         mysqlConnection.query("Select * from " + table, (err, rows, fields) => {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 res.send(rows);
//                 console.log(rows)
//             }
//         });
//     });
// }
// // getAllData('users', '/employee');



// //get a data

// function getADataById(table, link, coloum, field = '') {
//     app.get(link, (req, res) => {
//         console.log("Select * from " + table + " where " + coloum + "= ?");
//         mysqlConnection.query("Select * from " + table + " where " + coloum + "= ?", [req.params.id], (err, rows, fields) => {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 if (field == '') {
//                     res.send(rows);
//                 }

//                 console.log(rows)
//             }
//         });
//     });

// }

// // getADataById('users', '/employee/:id', "userId")

// //delete data


// function deleteAdata(table, link, coloum, field = '') {

//     app.delete(link, (req, res) => {
//         mysqlConnection.query("delete from " + table + " where " + coloum + "= ?", [req.params.id], (err, rows, fields) => {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 mysqlConnection.query("Select * from " + table, (err, rows, fields) => {
//                     if (err) {
//                         console.log(err)
//                     }
//                     else {
//                         res.send(rows);
//                         console.log(rows)
//                     }
//                 });
//             }
//         });
//     });

// }


// // deleteAdata('users', "/employee/:id", 'userId');



// //insert

// //function insertAdata(table, link, data) {

// app.post('/users', (req, res) => {
//     columns = getColumns("users");
//     console.log("Coloumns " + columns);
//     // const { name, code, salary } = req.body;

//     mysqlConnection.query("INSERT INTO " + table + " ( ? ) VALUES ( ? )"
//         , [columns, data], (err, rows, fields) => {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 mysqlConnection.query("Select * from users", (err, rows, fields) => {
//                     if (err) {
//                         console.log(err)
//                     }
//                     else {
//                         res.send(rows);
//                         console.log(rows)
//                     }
//                 });
//             }
//         });
// });
// //}


// //'3', 'aa', 'aa', 'aa', 'aa', 'aa', 'aa', 'aa'


// //update

// function updateData(table, link, coloum, data, releventUpdate, field = '') {
//     app.delete(link, (req, res) => {
//         mysqlConnection.query("UPDATE " + table + " where " + coloum + "= ?", [req.params.id], (err, rows, fields) => {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 mysqlConnection.query("Select * from " + table, (err, rows, fields) => {
//                     if (err) {
//                         console.log(err)
//                     }
//                     else {
//                         res.send(rows);
//                         console.log(rows)
//                     }
//                 });
//             }
//         });
//     });
// }

// // UPDATE`users` SET`password` = 'aaa' WHERE`users`.`userId` = 3;

// app.put('/employee/update/:id', (req, res) => {
//     const { name, code, salary } = req.body;
//     mysqlConnection.query("UPDATE `employee` SET `name` = ?, `code` = ?, `salary` = ? WHERE `employee`.`id` = ?;"
//         , [name, code, salary, req.params.id], (err, rows, fields) => {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 mysqlConnection.query("Select * from employee", (err, rows, fields) => {
//                     if (err) {
//                         console.log(err)
//                     }
//                     else {
//                         res.send(rows);
//                         console.log(rows) // print rows
//                     }
//                 });
//             }
//         });
// });