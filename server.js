'use strict'

const app = require("express")()
const proxy = require( "express-http-proxy")


const PORT= 8080;
const HOST= '0.0.0.0'


const inkHost = "http://localhost:5000"

// TODO: add token (and theme?)
app.use('/', proxy(inkHost))


app.listen(PORT, HOST)
console.log(`Example app listening on http://${HOST}:${PORT}`)
