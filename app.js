require('dotenv').config()
const express = require('express');
const app = express();
const {router} = require('./routes/index')
const mongoose = require("mongoose");

const mongoURI = process.env.MONGOURI;
mongoose.Promise = global.Promise;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
mongoose.connect(mongoURI, options);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error"));
db.once("open", () => console.log("Connected to mongodb!"));


app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const PORT = Number(process.env.PORT) || 3000
app.use(router)

app.listen(PORT, () => {
    console.log((`Running on Port ${PORT}`));
})