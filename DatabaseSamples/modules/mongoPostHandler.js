const MongoClient = require('mongodb').MongoClient
const DB_URL = 'mongodb://localhost:27017'

let simplePostDb

let insertPost = async (req, res) => {
  try {
    let newDocument = {
      title: req.body.title,
      content: req.body.content,
      insertedOn: new Date(),
      favFood: "Poutine",
      bestNumber: 42,
      aliens: "Not that bad"
    }
    let result = await simplePostDb.collection("content_post").insertOne(newDocument)
    let newPost = await simplePostDb.collection("content_post").findOne({ _id: result.insertedId })
    res.send(newPost)
  } catch (ex) {
    res.send(JSON.stringify(ex))
  }
}

let getPosts = async (req, res) => {
  try {
    let rows = await simplePostDb.collection("content_post").find().toArray()
    res.send(rows)
  } catch (ex) {
    res.send(JSON.stringify(ex))
  }

}

module.exports = async app => {
  let client = await MongoClient.connect(DB_URL, { useUnifiedTopology: true })
  simplePostDb = await client.db("simplepost")
  app.post('/newPost', insertPost)
  app.get('/posts', getPosts)
}