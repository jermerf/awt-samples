const mysql = require('mysql')

const simplePostDb = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'simplepost'
})

let insertPost = (req, res) => {
  let query = `
      INSERT INTO content_post (title, content) VALUE (
        ${mysql.escape(req.body.title)},
        ${mysql.escape(req.body.content)}
      );`
  simplePostDb.query(query, (error, rows, fields) => {
    if (error) {
      res.send(JSON.stringify(error))
    } else {
      res.send("It's 'Allegedly' in the database")
    }
  })
}

let getPosts = (req, res) => {
  let query = `SELECT * FROM content_post`
  simplePostDb.query(query, (error, rows, fields) => {
    if (error) {
      res.send(JSON.stringify(error))
    } else {
      res.send(rows)
    }
  })
}

module.exports = app => {
  app.post('/newPost', insertPost)
  app.get('/posts', getPosts)
}