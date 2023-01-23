const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('welcome')
// })

// using Event Emitter APIs

const server = http.createServer()
// emits request event

server.on('request', (req, res) => {
    res.end('welcome')
})

server.listen(5000)