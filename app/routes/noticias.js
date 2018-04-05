var dbConnetion = require('../../config/dbConnection');
module.exports = function (app) {  
//root@localhost: qeqRBnhe:2/t
    
    var connection = dbConnetion();

    app.get('/noticias', function (req, res) {
       /* var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'portal_noticias'

        });
        */
        connection.query('select *  from noticias', function (error, result) {
          //  res.send(result);
            res.render("noticias/noticias", {noticias : result});

        });
        //res.render("noticias/noticias");
    });
};