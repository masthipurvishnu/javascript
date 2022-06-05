import testFunction from './test.js'
import getCapCoResults from './capco.js'
// var testFunction = require('./test')
import express from 'express'
import cors from 'cors'
// var express = require('express')
var app = express()
// const cors = require('cors')


// this allows for get methods
app.use(cors({
    origin: 'http://localhost:3000'
}))
// for get and POST, like that you
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST'],
// }))

// enable cors only for 2 website
// const whiteList = ['localhost:30001', 'www.google.com']
// const corsOptions = {
//     origin: (origin, callback) => {
//         if (whiteList.indexOf(origin) !== -1) {
//             callback;
//         } else {
//             callback(new Error)
//         }
//     }
// }
// app.use(cors(corsOptions))

const server = app.listen(3010, () => {
    console.log(`i am listining at address ${JSON.stringify(server.address())}`)
})

app.get('/', (request, response) => {
    response.send(fetchIngridients())
})
testFunction()
getCapCoResults()
const fetchIngridients = () => {
    return ([
        {
            id: 1,
            name: 'water'
        },
        {
            id: 2,
            name: 'tea powder'
        },
        {
            id: 3,
            name: 'cardamom, ilachi, dry ginger power'
        },
        {
            id: 4,
            name: 'jaggery'
        }
    ])
}