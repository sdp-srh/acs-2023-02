const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.use(express.json())

app.use(express.static(path.join(__dirname, './static')));

/*
app.get('/', (req, res) => {
  res.send('Hello ACS Course!')
})
*/
app.get('/greeting', (req, res) => {
  res.send('<h1>Hello, greeting from the node server</h1>')
})

app.post('/sum', async (req,res)=> {
  const body = req.body
  const numbers = body.numbers
  console.log(numbers)
  let result = 0
  numbers.forEach(n => { result += n })
  console.log(result)
  
  res.send({ result: result}) 
})




app.listen(port, () => {
  console.log(`Server running: http://localhost:${port}`)
})