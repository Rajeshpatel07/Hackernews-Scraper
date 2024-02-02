require('dotenv').config();
const express = require('express')
const cookieParser = require('cookie-parser');
const routes = require('./src/routes/routes');

const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(routes);
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT)





