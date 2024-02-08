const express = require('express');
const mysql = require('mysql2');
const dbConfig = require('./config/mysql-config');
const shopList = require('./controllers/shop-list/shop-list.controller');
const app = express();

app.get('/', (req, res) => response.status(200).send('Olá Mundo'));

const apiRouter = express.Router();

app.use(express.json());
apiRouter.use('/api', apiRouter);
apiRouter.use('/shop-list ', shopList);

app.listen(3333, () => console.log('Server run port 3333'));
