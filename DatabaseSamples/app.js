const express = require('express')
const bodyParser = require('body-parser')
// const mysqlPostHandler = require('./modules/mysqlPostHandler.js')
const mongoPostHandler = require('./modules/mongoPostHandler')

const PORT = 8080
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// mysqlPostHandler(app)
mongoPostHandler(app)

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log("Listening on port " + PORT)
})