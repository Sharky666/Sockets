// const socket = require('socket.io');
// const app = socket(3000);

const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './src/web/index.html'));
});

app.listen(4000);