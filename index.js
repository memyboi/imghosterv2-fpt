const http = require('http');
const path = require("path")
const fs = require("fs")
const express = require('express')
const app = express()
const port = 1697

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})