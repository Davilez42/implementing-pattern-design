const userModel = require('./models/userScheme')


const getUsersWithComments = async()=>{
    const users =  await userModel.find()
    return users
}


module.exports =  {getUsersWithComments}