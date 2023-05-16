const User = require('../models/userModel')

//login user
const loginUser = async (req, res) => {
  res.json({mssg: 'LogedIn Successfully'})
}

//signup user
const signupUser = async (req, res) => {
  res.json({mssg: 'Signed Up Successfully'})
}

module.exports = {
  loginUser,
  signupUser
}