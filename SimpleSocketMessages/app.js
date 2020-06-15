const express = require('express')
const SocketServer = require("./modules/socket-server.js")

const PORT = 8080

var app = express()

app.use((req, res, next) => {
  console.log("Request path ", req.path)
  next()
})

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log("Listening on port ", PORT)
})

SocketServer.on('connection', ws => {
  console.log(" - New connection -")
  ws.on('message', msg => {
    console.log("Got message from socket: ", msg)
    ws.send("Message received as: " + msg.toUpperCase())
  })
})