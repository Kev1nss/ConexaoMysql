const express = require('express');
const app = express();
const port = 4000;


app.use(express.static('public'));

