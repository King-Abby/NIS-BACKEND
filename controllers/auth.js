const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res
        .status(404)
        .json({ success: false, message: "Please input all fields" });
    }

    // ======================
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // =====================
    const user = await User.create({ email, name, password });
    return res
      .status(201)
      .json({ success: true, message: "User created successfully", user });
  } catch (err) {
    console.error("Something went wrong", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Please input an email" });
  }

  if (!password) {
    return res
      .status(401)
      .json({ success: false, message: "Please input your password" });
  }

  //   ==============
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "User does not exist" });
  }

  // ===============
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return res
      .status(422)
      .json({ success: false, message: "Invalid password" });
  }
  return res
    .status(200)
    .json({ success: true, message: "Login successful", user });
};

module.exports = {
  signup,
  login,
};
