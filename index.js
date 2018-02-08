const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const massive = require('massive')
require('dotenv').config()

app = express()

app.use(cors())
app.use(bodyParser.json())

massive(processs.env.CONNECTION_STRING).then(db => app.set('db', db))

const port = process.env.PORT || 3000

app.listen(port, () => { console.log('Listening on port: ' + port) })

