const express = require('express')
const app = express()
const port = 3000
const rq = require('request')
const parser = require('xml2json');

require('dotenv').config()

app.use(express.static('public'))


// --- index
app.get('/', (req, res) => {
  res.render(__dirname + '/index.html')
})

// --- api
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const pk = process.env.PK
app.post('/api-ask', (req, res, next) => {
  const q = req.body.query
  const pgs = req.body.pgs

  const query = `https://zoeken.oba.nl/api/v1/search/?authorization=${pk}&q=${q}&pagesize=${pgs}`
  rq(query, (err, resp, body) => {
    const data = parser.toJson(body)
    console.log(err, data)
    res.set('Content-Type', 'application/json');
    res.send(data)
  })
});

app.listen(port, () => console.log(`app listening on port ${port}`))
