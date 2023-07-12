const userService = require("../database/users.Service");
const json = require("jsonwebtoken");
require("dotenv").config();
const authRecived = async (req, res) => {
  try {
    const { credential, g_csrf_token } = req.body;
    const data = json.decode(credential, process.env.SECRET_TOKEN_GOOGLE);
    console.log(data);
    let user_db = await userService.getUserByEmail(data.email);
    if (!user_db) {
      //guardo en la base de datos
      const user =  await userService.creatNewUser(data)
      user_db = user;
    }
    const token = json.sign(
      JSON.stringify(user_db),
      process.env.KEY_SECRET_TOKEN
    );
    res.status(200).json({
      token,
      _id: user_db._id,
      name: user_db.name,
      url_avatar: user_db.url_avatar,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  authRecived,
};
