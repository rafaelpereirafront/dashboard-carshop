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

  let SQL_VENDEDOR =
    'INSERT INTO vendedor(nome,sobrenome,cidade) VALUES (?,?,?) ';

  db.query(SQL_VENDEDOR, [nome, sobrenome, cidade], (err, result) => {
    console.log(err);
  });
});

app.get('/getCards', (req, res) => {
  let SQL_VENDEDOR = 'SELECT * from vendedor';

  db.query(SQL_VENDEDOR, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.post('/registerCar', (req, res) => {
  const { categoria } = req.body;
  const { modelo } = req.body;
  const { ano } = req.body;
  const { preco } = req.body;
  const { condicao } = req.body;
  const { imagem } = req.body;

  let SQL_CAR =
    'INSERT INTO carro(categoria,modelo,ano,preco,condicao,imagem) VALUES (?,?,?,?,?,?)';

  db.query(
    SQL_CAR,
    [categoria, modelo, ano, preco, condicao, imagem],
    (err, result) => {
      console.log(err);
    },
  );
});

app.get('/getCardsCar', (req, res) => {
  let SQL_CAR = 'SELECT * from carro';

  db.query(SQL_CAR, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.post('/registerVenda', (req, res) => {
  const { data } = req.body;
  const { mes } = req.body;
  const { modelocarro } = req.body;
  const { nome } = req.body;
  const { sobrenome } = req.body;
  const { cidade } = req.body;
  const { preco } = req.body;

  let SQL_VENDAS =
    'INSERT INTO venda(data,mes,modelocarro,nome,sobrenome,cidade,preco) VALUES (?,?,?,?,?,?,?)';

  db.query(
    SQL_VENDAS,
    [data, mes, modelocarro, nome, sobrenome, cidade, preco],
    (err, result) => {
      console.log(err);
    },
  );
});

app.get('/getCardsVenda', (req, res) => {
  let SQL_VENDA = 'SELECT * from venda';

  db.query(SQL_VENDA, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.listen(3001, () => {
  console.log('servidor ok');
});
