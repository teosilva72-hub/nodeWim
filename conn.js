const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'trcvbr18',
    database: 'tracevia_app'
});
conn.connect(err => {
    if (err)
        console.log('Problema de conexão com o MYSQL', err)
        //throw err
        //} else console.log('::: MYSQL OK:::')
})

module.exports = {
    Conn: conn
}