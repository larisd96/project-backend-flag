const express = require('express');
const mysql = require('mysql2');
const dbConfig = require('./config/mysql-config');
const shopList = require('./routes/shop-list.route');

const app = express();
const apiRouter = express.Router();

app.use(express.json());

app.use('/api', apiRouter);
apiRouter.use('/shop-list', shopList);

app.listen(8080, () => console.log('Server run port 8080'));
