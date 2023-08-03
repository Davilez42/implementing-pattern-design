

const getUsersWithComments = ({ userModel }) => async () => {
  const users = await userModel.find();
  return users;
};
const getUserByEmail = ({ userModel }) => async (email) => {
  const user = await userModel.findOne({ email });
  return user;
};
const creatNewUser = ({ userModel }) => async (data) => {

  const new_user = new userModel({
    name: data.name,
    email: data.email,
    url_avatar: data.picture
  })

  await new_user.save()
  return new_user
}
module.exports = { getUsersWithComments, getUserByEmail, creatNewUser };
