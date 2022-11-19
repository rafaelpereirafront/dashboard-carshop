const express = require('express');
const app = express();
const mysql = require('mysql');

const dataBase = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'login',
});

app.get('/', (request, res) => {
  let SQL = "INSERT INTO login (username,password)VALUES ('admin','admin')";

  dataBase.query(SQL, (err, result) => {
    console.log(err);
  });
});

app.listen(3001, () => {
  console.log('servidor ok');
});
