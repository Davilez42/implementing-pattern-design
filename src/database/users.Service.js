

const getUsersWithComments = async () => {
  const users = await userModel.find();
  return users;
};
const getUserByEmail = async (email) => {
  const user = await userModel.findOne({ email });
  return user;
};
const creatNewUser = async (data) => {
  const new_user = new userModel({
    name: data.name,
    email: data.email,
    url_avatar: data.picture
  })
  console.log(new_user);
  await new_user.save()
  return new_user
}
module.exports = { getUsersWithComments, getUserByEmail, creatNewUser };
