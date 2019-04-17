const api_call = require('../components/api-call')

function click (state, emitter) {
  emitter.on('oba', () => {
    console.log('OBA yooo')
    emitter.emit('render')
  })

}

module.exports = click
