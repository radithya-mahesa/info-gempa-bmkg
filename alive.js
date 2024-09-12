const express = require('express')
const http = require('http')

const app = express()
app.get('/', (req, res) => {
  res.send('jalan cuy')
})

function alive() {
  const server = http.createServer(app)
  server.listen(7000, () => {
    console.log(`Server is running on port ${7000}\nhttp://localhost:7000`)
  })
}

module.exports = alive
