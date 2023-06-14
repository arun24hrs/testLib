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
        let details = os.userInfo();
        arr.push(details)
        let newUser = new Modal(details)
        await newUser.save()
        console.log(arr)
        res.send("hello")
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
