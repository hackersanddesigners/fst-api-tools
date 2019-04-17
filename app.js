const express = require('express')
const app = express()
const port = 3000
const rq = require('request')
const parser = require('xml2json');

require('dotenv').config()

app.get('/', (req, res) => {
  res.send('hi hi!')
})

// --- api
const pk = process.env.PK
const q = 'lack'
const pgs = '3'

query = `https://zoeken.oba.nl/api/v1/search/?authorization=${pk}&q=${q}&pagesize=${pgs}`

app.get('/api', (req, res) => {
  rq(query, (err, resp, body) => {
    const data = parser.toJson(body)
    console.log(err, data)
    res.json(data)
  })
})

app.listen(port, () => console.log(`app listening on port ${port}`))
