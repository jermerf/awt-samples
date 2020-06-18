const mssql = require('mssql')

const CONNECTION_STRING = "Data Source=JERASUS\\SQLEXPRESS;Initial Catalog=classroom;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";

let simplePostDb

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

module.exports = async app => {
  await mssql.connect(CONNECTION_STRING)
  simplePostDb = mssql
  app.post('/newPost', insertPost)
  app.get('/posts', getPosts)
}