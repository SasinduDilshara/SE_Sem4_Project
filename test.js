const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'boardingvibes',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


async function getBlogPost() {

    const result = await pool.query('SELECT * from users');
    if (result.length < 1) {
        throw new Error('Post with this id was not found');
    }
    // console.log(result[0]);
    return result[0];

}

module.exports = getBlogPost;