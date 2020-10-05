require('dotenv').config()


const express = require('express');
const app = express();
const massive = require('massive');
const ctrl = require('./controller')

const { CONNECTION_STRING, SERVER_PORT } = process.env;


app.use(express.json())

app.get('/api/products', ctrl.getAllProducts);
app.post('/api/products', ctrl.addProduct);

  


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false
    }
  }).then(db => {
    console.log('db connected');
    app.set('db', db);
  }).catch(err => console.log(err))

// app.get('/api/products', ctrl.getAllProducts);

   app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))
  

// app.listen(SERVER_PORT, () => console.log(`I am alive!!!! ${SERVER_PORT}`))