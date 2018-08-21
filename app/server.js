const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const Router = require('./routes/router');

const PORT = 3001;

const app = express();

app.use(logger('dev'))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use('/work', Router);

app.listen(PORT, () => console.log('listening on port: ', PORT));
