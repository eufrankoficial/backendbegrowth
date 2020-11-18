const express = require('express');
const requireDir = require('require-dir');
const database = require('./src/config/database');
const PORT = 3000;
const app = express();

app.get('/', (request, response) => {
    return response.json({
        message: 'Hello'
    });
});

app.use(express.json());

database.connectToDatabase();
requireDir('./src/models');

app.use('/api', require('./src/routes'));
app.listen(PORT);