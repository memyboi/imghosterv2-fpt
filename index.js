const http = require('http');
const express = require("express")
const path = require("path")
const fs = require("fs")
const PORT = 3000;

const app = express()

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!');
// });

app.get("/", (req, res) => {
  console.log("something connected !!1!1!!")
  res.send("hi !11!")
})

app.listen(PORT)