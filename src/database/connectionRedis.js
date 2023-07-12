const {createClient } = require('redis')
const getConectionRedis=()=>{
    const client =  createClient({
        host:'127.0.0.1',
        port:6379
      })
      client.on("connect",()=>console.log("Redis connect"))
      client.on("disconnect",()=>console.log("Redis disconnect"))
      
      return  client
    
}
module.exports = getConectionRedis