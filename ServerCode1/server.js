const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors({
    origin: 'http://localhost:3000'
}))
const server = app.listen(3001, 'localhost', () => {
    console.log('server: ', server.address());
})

const res = app.get('/', (req, res) => {
    res.send(fetchIngridients())
})

function fetchIngridients() {
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




console.log('test');


















// const { response } = require('express');
// const express = require('express')
// const app = express()
// const cors = require('cors')

// app.use(cors({
//     origin: 'http://localhost:3000'
// }))

// const server = app.listen(3001, '127.0.0.1', () => {
//     console.log('server: ', server.address());
// })

// const res = app.get('/', (request, response) => {
//     console.log('request received')
//     return response.send(fetchIngridients())
// })

// console.log(res);
// function fetchIngridients() {
//     return ([
//         {
//             id: 1,
//             name: 'water'
//         },
//         {
//             id: 2,
//             name: 'tea powder'
//         },
//         {
//             id: 3,
//             name: 'cardamom, ilachi, dry ginger power'
//         },
//         {
//             id: 4,
//             name: 'jaggery'
//         }
//     ])
// }

// console.log('test');