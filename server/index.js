require('dotenv').config()
const express = require('express');
const massive = require('massive')

const ctrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()

app.use(express.json())

app.get('/api/products', ctrl.getAllProducts)


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false,
    },
  }).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('DB Ready')
   app.listen(4040, () => console.log('Server running on 4040'))
  })

// app.listen(SERVER_PORT, () => console.log(`I am alive!!!! ${SERVER_PORT}`))