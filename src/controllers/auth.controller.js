const User = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const SignUp = async (req, res) => {
  try {
    let user = await User.findOne({ userName: req.body.userName })
      .lean()
      .exec();

    if (user) {
      return res.status(400).json({
        message: "Please provide different userName",
      });
    }

    user = await User.create({ ...req.body, uuid: uuidv4() });

    return res.status(201).json(user);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
};

const LogIn = async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });

    if (!user) {
      return res.status(400).json({
        message: "Please check your userName and password",
      });
    }

    const match = await user.checkPassword(req.body.password);

    if (!match) {
      return res.status(400).json({
        message: "Please check your userName and password",
      });
    }

    return res.status(202).json(user);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
};

module.exports = { SignUp, LogIn };
