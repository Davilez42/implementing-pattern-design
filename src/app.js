const express = require("express");
const authRoutes = require('./routes/auth.routes')
const labRoutes = require('./routes/lab.routes')
const contentRoutes = require('./routes/content.routes')

const cors = require('cors')


const app = express();

app.use(cors({
    origin: ["*"]
}))


app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: "Welcome to server, this server is for practice  !!" })
})

app.use('/auth/', authRoutes)
//app.use('/test/lab/', labRoutes)
app.use('/content/', contentRoutes)



module.exports = app;
