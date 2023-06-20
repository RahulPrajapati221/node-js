const express = require ("express");
const app = express();

const mongoose = require("mongoose");
const db_uri = "mongodb://localhost:27017"

const db = mongoose.connect(db_uri,()=>{
    console.log("database connected....")
})

app.listen(5000,()=>{
    console.log("server running....")
})

app.get("/",(req, resp)=>{
    console.log(req.url)
})