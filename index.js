const express = require ('express')
const app = express()
const db = require('./db')
const Image = require('./image/model')
const imageRouter = require('./image/router')
const cors = require('cors')
const bodyParser = require('body-parser')
const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use(imageRouter)
const port = process.env.PORT || 4000
app.listen(port, console.log(`Listening on ${port}`));