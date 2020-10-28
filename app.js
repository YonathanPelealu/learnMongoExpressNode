require('dotenv').config()
const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');
const uri = process.env.MONGODB_API_URL
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const connect = client.connect() ? console.log('succesfully connected to database') : console.log(err)
 
const PORT = process.env.PORT || 5050
app.listen(5050, () => {
    console.log((`Running on Port ${PORT}`));
})