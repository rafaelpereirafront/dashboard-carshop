const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const dataBase = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'login',
});

app.use(cors());
app.use(express.json());

// app.get('/', (request, res) => {
//   let SQL_VENDEDOR =
//     "INSERT INTO vendedor (nome,sobrenome,cidade)VALUES ('daniel','alves','campinas')";

//   dataBase.query(SQL_VENDEDOR, (err, result) => {
//     console.log(err);
//   });
// });

app.listen(3001, () => {
  console.log('servidor ok');
});
