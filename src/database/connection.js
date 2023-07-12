const mongoose = require('mongoose')
const uri  =  'mongodb+srv://davz42:1kfmibro86662@cluster0.klylabv.mongodb.net/sample_mflix'
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Connection Established");
    mongoose.connection.on("open",_=>{
        console.log("Open new connection");
    })
    mongoose.connection.on('error',()=>console.log('error'))
})
.catch(err=>console.log("Connection Error"))
module.exports  = mongoose