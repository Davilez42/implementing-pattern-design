const { Router } = require('express')
const { authPlatformGoogle } = require('../controller/')
const auth = Router()

require('dotenv').config()


auth.post('/auth-recived', authPlatformGoogle)


module.exports = auth



