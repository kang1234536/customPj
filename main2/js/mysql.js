const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool
({

  host: '34.64.230.17',
  port: '3306',
  user: 'HEEWON',
  password: '!@#gmldnjsal12',
  database: 'TEST',  
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const getUsers = async ()=>
{
    const promisePool = pool.promise();
    const [rows] = await promisePool.query('select * from TEST;');
    console.log(rows);
    return rows;
};

module.exports = 
{
    getUsers
};