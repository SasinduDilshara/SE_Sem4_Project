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

function getColumns(table, databaseName) {
    coloum_list = [];
    mysqlConnection.query(
        "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = " + "\'" + table + "\'" + " and table_schema = " + "\'" + databaseName + "\'", (err, rows, fields) => {
            if (err) {
                console.log(err)
            }
            else {
                // res.send(rows);
                for (i = 0; i < rows.length; i++) {
                    coloum_list.push(rows[i].COLUMN_NAME);
                }
                console.log(coloum_list);
                res.send(coloum_list)
                return coloum_list;
            }
        });
}

getColumns("/column", "users", database_Details.databaseName);

//SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'users' and table_schema = 'Se_sem4_Project';

//get all data

function getAllData(table, link) {
    app.get(link, (req, res) => {
        mysqlConnection.query("Select * from " + table, (err, rows, fields) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(rows);
                console.log(rows)
            }
        });
    });
}
// getAllData('users', '/employee');



//get a data

function getADataById(table, link, coloum, field = '') {
    app.get(link, (req, res) => {
        console.log("Select * from " + table + " where " + coloum + "= ?");
        mysqlConnection.query("Select * from " + table + " where " + coloum + "= ?", [req.params.id], (err, rows, fields) => {
            if (err) {
                console.log(err)
            }
            else {
                if (field == '') {
                    res.send(rows);
                }

                console.log(rows)
            }
        });
    });

}

// getADataById('users', '/employee/:id', "userId")

//delete data


function deleteAdata(table, link, coloum, field = '') {

    app.delete(link, (req, res) => {
        mysqlConnection.query("delete from " + table + " where " + coloum + "= ?", [req.params.id], (err, rows, fields) => {
            if (err) {
                console.log(err)
            }
            else {
                mysqlConnection.query("Select * from " + table, (err, rows, fields) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        res.send(rows);
                        console.log(rows)
                    }
                });
            }
        });
    });

}


// deleteAdata('users', "/employee/:id", 'userId');



//insert

function insertAdata(table, link) {


    app.post(link, (req, res) => {
        const { name, code, salary } = req.body;
        mysqlConnection.query("INSERT INTO `employee` (`name`, `code`, `salary`) VALUES (? , ? , ?);"
            , [name, code, salary], (err, rows, fields) => {
                if (err) {
                    console.log(err)
                }
                else {
                    mysqlConnection.query("Select * from employee", (err, rows, fields) => {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            res.send(rows);
                            console.log(rows)
                        }
                    });
                }
            });
    });

}



//update

app.put('/employee/update/:id', (req, res) => {
    const { name, code, salary } = req.body;
    mysqlConnection.query("UPDATE `employee` SET `name` = ?, `code` = ?, `salary` = ? WHERE `employee`.`id` = ?;"
        , [name, code, salary, req.params.id], (err, rows, fields) => {
            if (err) {
                console.log(err)
            }
            else {
                mysqlConnection.query("Select * from employee", (err, rows, fields) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        res.send(rows);
                        console.log(rows) // print rows
                    }
                });
            }
        });
});