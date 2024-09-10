const express = require('express')
const http = require('http')

const app = express()
app.get('/', (req, res) => {
  res.send('jalan cuy')
})

function alive() {
  const server = http.createServer(app)
  server.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on port ${process.env.PORT || 8080}\nhttp://localhost:${process.env.PORT || 8080}`)
  })
}

module.exports = alive
