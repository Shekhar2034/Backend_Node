const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Shekhar Gavhade')
})

app.listen(3000)