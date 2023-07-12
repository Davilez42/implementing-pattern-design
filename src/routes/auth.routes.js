const {Router} =  require('express')
const {authRecived} = require('../controller/auth.controller')
const router = Router()

require('dotenv').config()

router.post('/auth-recived',authRecived)


module.exports = router



