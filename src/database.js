const mysql = require('mysql');
const {promisify} = require('util');
const {database} = require('./keys');


const pool = mysql.createPool(database);
pool.getConnection((err, connection) =>{
     if(err){
        console.log('Ocurrió algun error');
     }
     if(connection){
      connection.release();
      console.log('DB is connected');
     } 
     return;
})

// promisify pool querys
pool.query = promisify(pool.query);
module.exports = pool;