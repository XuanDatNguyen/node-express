const express = require('express');
const app = express();
const index = require('./routes/index');
const {detail} = require('./routes/detail');

app.listen(8080);

//Routing
app.get("/",index);
app.get("/detail",detail);


//Template Engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

//Static File
app.use(express.static(__dirname + "/public"));

//connect mysql
const mysql = require('mysql');
const db = mysql.createConnection ({
   host: 'localhost',
   user: 'root',
   password: '123456',
   database: 'myshop'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
 });
 global.db = db;

