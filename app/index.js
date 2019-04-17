const choo = require('choo')
const devtools = require('choo-devtools')
const html = require('choo/html')

const app = choo()
app.use(devtools())

app.use(require('./stores/click'))

app.route('/', require('./views/main'))

if (!module.parent) app.mount('body')
else module.exports = app
