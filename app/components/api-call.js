const xhr = require('xhr')
const pk = require('./pk').pk
const baseUrl = 'https://zoeken.oba.nl/api/v1/';
const path = 'search'

xhr({
  method: 'get',
  url: baseUrl + path + '/?authorization=' + pk
}, function (err, resp, body) {
  if (err) throw err
  console.log(err, reps, body)
})