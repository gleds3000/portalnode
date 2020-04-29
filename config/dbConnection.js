
var mysql = require('mysql');

var connMySQL = function () {
    console.log('Conexao com o bd foi estabelecida');
    return mysql.createConnection({
       host:'CLEARDB_DATABASE_URL',
       user: 'DB_USER',
        password: 'DB_PASS',
        database:'DB_NAME' 
        // host: 'localhost',
       // user: 'root',
       // password: '1234',
       // database: 'portal_noticias'

    });
}
module.exports = function () {
   // console.log('O autoload carregou o módulo de conexão com o bd');
    console.log('bd acionado', new Date().toISOString());
    return connMySQL;
}
