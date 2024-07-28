const UsersModel = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const setUser = async (req, res) => {
  console.log(req.body);
  let email = req.body.email;
  let name = req.body.name;
  let password = req.body.password;

  const user = await UsersModel.findOne({ email: email });
  if (user) {
    return res.send("user exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new UsersModel({
    name: name,
    email: email,
    password: hashedPassword,
  });

  const savedUser = newUser.save();

  const token = jwt.sign({ userId: savedUser._id }, "12345");

  //res.send("user set");
  return res.json({ user: newUser, token });
};

const loginUser = async (req, res) => {
  //console.log(req.body);
  //return res.send("login");
  let email = req.body.email;
  let password = req.body.password;
  const user = await UsersModel.findOne({ email: email });
  if (!user) {
    return res.send("User Not Found");
  }
  //now compare password
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.send("password does not match");
  }
  const token = jwt.sign({ userId: user._id }, "12345");
  console.log(req.body);
  return res.json({ user: user, token });
};

module.exports = { setUser, loginUser };
