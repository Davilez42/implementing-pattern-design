const express = require("express");
const authRoutes = require('./routes/auth.routes')


const cors =  require('cors')
const {join} = require('path')
const app = express();

app.use(cors({
    origin:["*"]
}))
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static(join(__dirname,'public')))
app.get('/',(req,res)=>{
    res.json({message:"Welcome to server, this server is for practice mongoose !!"})
})
app.use('/auth/',authRoutes)



module.exports = app;
