const express = require ('express')
const app = express()
const db = require('./db')
const Image = require('./image/model')
const port = process.env.PORT || 4000
app.listen(port, console.log(`Listening on ${port}`));