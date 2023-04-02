
// console.log('Hi! node.js is running')

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello ACS Course!')
})

app.listen(port, () => {
  console.log(`Server running: http://localhost:${port}`)
})