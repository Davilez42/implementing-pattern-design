const express = require("express");
const routesV1 = require('./routes/index.routes')
const cors = require('cors')
const app = express();

app.use(cors({
    origin: ["*"]
}))
app.use(express.json())



app.get('/', (req, res) => {
    res.json({ message: "Welcome to server, this server is for practice  !!" })
})

app.use(routesV1)



module.exports = app;
