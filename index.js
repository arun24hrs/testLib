const os = require("os");
const express = require("express");
const connection = require("./db");
const { default: axios } = require("axios");
var cors = require('cors');
const Modal = require("./modal");

const app = express();
app.use(cors())
app.use(express.json());
// console.log(os.userInfo())
let arr =[]

app.post("/", async(req, res)=>{
    try {
        
        res.send(res)
    } catch (error) {
        console.log(error)
        res.send("error")
    }
    // console.log(os.hostname());
})


app.listen(8080, async()=>{
    console.log("server is running")
    try {
        await connection;
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
})
