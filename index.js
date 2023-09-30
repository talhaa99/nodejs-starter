require('dotenv').config()
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
require('./db');

const app = express();

app.use(express.json());

const CORS_OPTIONS = process.env.CORS_OPTIONS;

let corsOrigins = [];

if (CORS_OPTIONS) {
    corsOrigins = CORS_OPTIONS.split(',')
}

const corsOptions = {
    origin: corsOrigins,
    optionsSuccessStatus: 200
};

app.use(express.static('public'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});