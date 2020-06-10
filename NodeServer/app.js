const express = require('express')
const bodyParser = require('body-parser')

const PORT = 8080
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.post("/", (req, res) => {
  res.send({
    bigUsername: req.body.username.toUpperCase(),
    bigPassword: req.body.password.toUpperCase(),
    superSecret: req.body.Secret + req.body.Secret
  })
})

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log("Listening on port " + PORT)
})