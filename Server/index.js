const express = require('express')

const routes = require('./src/routes/routes')

require('dotenv').config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(process.env.PORT)





