const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const massive = require('massive')
require('dotenv').config()

const { create, getOne, getAll, update, destroy } = require('./products_controller')

app = express()

app.use(cors())
app.use(bodyParser.json())

massive(processs.env.CONNECTION_STRING).then(db => app.set('db', db))

const port = process.env.PORT || 3000

app.listen(port, () => { console.log('Listening on port: ' + port) })

app.get("/api/products", getAll);
app.get("/api/product/:id", getOne);
app.put("/api/product/:id?desc=...", update);
app.post("/api/product", create);
app.delete("/api/product/:id", destroy);
