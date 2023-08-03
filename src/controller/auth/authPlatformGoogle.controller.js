

require("dotenv").config();

const authPlatformGoogle = ({ getUserByEmail, creatNewUser }, json) => async (req, res) => {
  try {
    const { credential, g_csrf_token } = req.body;
    const data = json.decode(credential, process.env.SECRET_TOKEN_GOOGLE);
    console.log(data);
    let user_db = await getUserByEmail(data.email);
    if (!user_db) {
      const user = await creatNewUser(data)
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
  authPlatformGoogle,
};
