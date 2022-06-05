var express = require('express');
var app = express();

app.get('/', (request, response) => {
    response.send('hello world')
})

var server = app.listen(3010, () => {
    console.log(`server ${server.address().address} is running on- ${server.address().port}`);
})
// ==========
const express = require('express')
const app = express()

const server = app.listen(3010, '127.0.0.9', () => {
    console.log(server.address());
})
app.get('/', (request, response) => {
    response.send('helooooo')
})