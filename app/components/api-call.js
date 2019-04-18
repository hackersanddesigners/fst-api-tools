const xhr = require('xhr')

function api_call () {
  xhr({
    method: 'get',
    uri: '/api',
    json: true
  }, function (err, resp, body) {
    if (err) throw err
    console.log(err, resp, body)
    console.log(body)
  })
}

module.exports = api_call
