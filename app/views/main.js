const html = require('choo/html')
const xhr = require('xhr')

function view (state, emit) {
  console.log(state)
  
  return html`
    <body>
      <main>
        <p>haaaaacking!!</p>
        <form id="oba" onsubmit=${ onsubmit }>
         <div>
            <label for="query">Query</label>
            <input id="query" name="query" type="text" placeholder="eg Queer">
          </div>

          <div>
            <label for="pgs">Page Size</label>
            <input id="pgs" name="pgs" type="text" placeholder="eg 3">
          </div>

          <input type="submit" value="Search">
        </form>

        <section>
          <h2>Results</h2> 
          ${ result(state, emit) }
        </section> 
      </main>
    </body>
  `

  function onsubmit(e) {
    e.preventDefault()
    var form = e.currentTarget
    var data = new FormData(form)
    var body = {} 
    for (var pair of data.entries()) body[pair[0]] = pair[1]
    body = JSON.stringify(body)

    xhr({
      method: 'post',
      uri: '/api-ask',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }, (err, resp) => {
      if (err) throw err
      console.log(JSON.parse(resp.body))
      state.components.query = JSON.parse(resp.body)
    })
  }

  function result (state, emit) {
    if (state.components.query !== undefined) {
      console.log(state.components.query.aquabrowser.results)
    }
  }
  
}

module.exports = view
