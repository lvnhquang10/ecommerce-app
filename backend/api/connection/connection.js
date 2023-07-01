const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    database: 'shop'
})

mysqlConnection.connect( err => {
    if(err){
        console.log("Error connecting to MySQL server", err);
        return;
    }else{
        console.log('DB is working');
    }
});

module.exports = mysqlConnection;