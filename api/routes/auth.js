const router = require("express").Router();
const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// router.get("/", async (req, res) => {
//   res.status(201).send("Hello there");
// });

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: cryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
    isAdmin: req.isAdmin,
  });

  try {
    const savedUser = await newUser.save();
    const {password, ...others} = savedUser._doc;
    res.status(201).json(others);

  } catch (err) {
    res.status(500).json({
      message: "Error saving new user",
      error: err.message,
    });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    !user && res.status(401).json({ message: "Wrong user Name" });

    const originalPassword = cryptoJs.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    ).toString(cryptoJs.enc.Utf8);
    originalPassword != req.body.password && 
    res.status(401).json({message: "Wrong Password"});

    const accessToken = jwt.sign({
        id: user._id,
        isAdmin: user.isAdmin,
    }, process.env.JWT_SECRET, {expiresIn: "3d"});

    const {password, ...others} =user._doc;
    res.status(200).json({...others, accessToken})

  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
