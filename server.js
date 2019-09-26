const { join } = require('path');
const express = require('express');

const { users } = require('./data.js');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser());

app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/user', (req, res) => {
    console.log('/user: ', req.body);
    users.push(req.body);

    res.send(200)
});

app.listen(3000, () => console.log('port 3000'));
