const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'login',
});

app.use(cors());
app.use(express.json());
app.post('/register', (req, res) => {
  const { nome } = req.body;
  const { sobrenome } = req.body;
  const { cidade } = req.body;

  let SQL = 'INSERT INTO vendedor(nome,sobrenome,cidade) VALUES (?,?,?) ';

  db.query(SQL, [nome, sobrenome, cidade], (err, result) => {
    console.log(err);
  });
});

app.get('/getCards', (req, res) => {
  let SQL = 'SELECT * from vendedor';

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.listen(3001, () => {
  console.log('servidor ok');
});
