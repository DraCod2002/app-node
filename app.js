const express = require('express');
const app = express();
const router = express.Router();
const db = require('./db');
const pedidos = require('./routes/pedidos');

const path = __dirname + '/views/';

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/pedidos', pedidos);

// Obtener el puerto desde la variable de entorno PORT, o utilizar el puerto 8080 como predeterminado
const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log(`Example app listening on ${port}!`);
});
