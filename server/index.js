const express = require('express')
const app = express()
const PORT = 4000

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

const http = require('http').Server(app)
const cors = require('cors')
const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
})

socketIO.on('connection', (socket) => {
    console.log(`${socket.id} use `);
})

app.use(cors())

app.get("/api", (req, res) => {
    res.json({
        message: "Death classic"
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})