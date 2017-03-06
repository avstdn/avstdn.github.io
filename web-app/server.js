var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: '1234',
        server: 'PROBOOK\\SQLEXPRESS',
        database: 'MyCompany'
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('SELECT UserName FROM dbo.Users', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(3000, function () {
    console.log('Server is running on localhost:3000');
});


// var express = require('express');
// var router = express.Router();
// var Connection = require('tedious').Connection;
// var config = {
//   userName: 'probook\\alexey',
//   password: '385140',
//   server: 'PROBOOK\\SQLEXPRESS'
// }
// var connection = new Connection(config);
// connection.on('connect', function(err) {
//      //Add error handling here   
//      getSqlData();
//     }
// );
// var Request = require('tedious').Request;

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// function getSqlData() {
//     console.log('Getting data from SQL');
//     request = new Request("SELECT * FROM dbo.MyCompany",
//         function(err, rowCount) {
//         if (err) {
//             console.log(err);
//         } else {
//             insertIntoMongoDb();
//         }
//     });
//     request.on('row', function(columns) {
//         var row = {};
//         columns.forEach(function(column) {
//             row[column.metadata.colName] = column.value;
//         });
//         rows.push(row);
//     });
//     connection.execSql(request);
// }