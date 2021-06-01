// import lib server
const express = require('express');
const path = require('path');
const pages = require('./pages.js')
// init the express
const server = express()
server
// use req body
.use(express.urlencoded({ extended: true }))
// using static files
.use(express.static('public'))

// setting template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// application routes
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

// turn on server
server.listen(3000)
