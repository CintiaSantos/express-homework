const express = require('express')
const app = express()
const PORT = 3000
// respond with "hello world" when a GET request is made to the homepage
app.get('/greetings/:name', (req, res) => {
  res.send('hello there ' + req.params.name)
})

app.get('/tip/:total/:percentage', (req, res) => {
    res.send('Tip: ' + req.params.total*req.params.percentage/100)
  })


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })

  console.log()