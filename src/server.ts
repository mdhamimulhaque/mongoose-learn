const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 5000

// =====> database connection
async function main() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/learn-mongoose');
    }catch(err){
        console.log(`database is not connected`)
    }
  
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})