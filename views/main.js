const html = require('choo/html')

function view (state, emit) {
  console.log(state)
  
  return html`
    <body>
      <main>
        <p>haaaaacking!!</p>
        <button onclick=${ fetch_it }>OBA</button>
      </main>
    </body>
  `

  function fetch_it () {
    emit('oba')
  }

  function result (state, emit) {
    if (state.components.oba !== undefined) {
      return html`
        <section>
        </section>
      `
    }
  }
  
}

module.exports = view
