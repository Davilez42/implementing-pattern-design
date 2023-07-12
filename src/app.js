const express = require("express");
const productsRouter = require('./routes/test.routes')
const cors =  require('cors')
const {join} = require('path')
const app = express();

app.use(cors({
    origin:[]
}))

app.user(static(pat))
app.get('/',(req,res)=>{
    res.json({message:"Welcome to server, this server is for practice mongoose !!"})
})
app.use(loginRouts)
app.use(productsRouter)


module.exports = app;
