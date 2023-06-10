const http = require('http');
const path = require("path")
const fs = require("fs")
const express = require('express')
const app = express()
const port = 1697

app.get('/', (req, res) => {
  res.send('send api request to get imgs')
})

app.get("/box/:game/:type/:type2/:boximg", (req, res) => {
  const params = req.params
  res.sendFile(`./boxes/${params.game}/${params.type}/${params.type2}/${params.boximg}`, {
    root: "/app",
    //dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  } ,function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log(`item was sent. details: game ${params.game} type ${params.type} type2 ${params.type2} imgname ${params.boximg}`)
    }
  })
})

app.get("/icon/:game/:sprites/:spritetype/:shinyness/:icon", (req, res) => {
  const params = req.params
  res.sendFile(`./icons/${params.game}/${params.sprites}/${params.spritetype}/${params.shinyness}/${params.icon}`, {
    root: "/app",
    //dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  } ,function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log(`item was sent. details: game ${params.game} sprites ${params.sprites} stype ${params.spritetype} shiny ${params.shinyness} icon ${params.icon}`)
    }
  })
})

app.listen(port, () => {
  console.log(`Operating on port ${port}`)
})