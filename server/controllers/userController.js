const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    user = new User({ name, email, password });
    await user.save();
    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

//login User Controll 
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login request received:", { email, password });
  
  if (!email || !password) {
    console.log("Validation error: Missing fields");
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("Validation error: Invalid credentials - user not found");
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Validation error: Invalid credentials - password mismatch");
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).send("Server error");
  }
};

module.exports = { registerUser, loginUser, logoutUser };
