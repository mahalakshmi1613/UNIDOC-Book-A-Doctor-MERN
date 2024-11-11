const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Doctor = require("../models/doctorModel");
const Appointment = require("../models/appointmentModel");

const getuser = async (req, res) => {
  console.log(`Request received for user:${req.params.id}`); 
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    return res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: "Error fetching user" });
  }
};

const getallusers = async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: req.user.id } }).select(
      "-password"
    );
    return res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: "Error fetching all users" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    return res.status(200).send({ message: "Login successful", token });
  } catch (error) {
    res.status(500).send({ message: "Error logging in user" });
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error registering user" });
  }
};

const updateprofile = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name && !email && !password) {
    return res.status(400).send({ message: "No updates provided" });
  }

  try {
    const updates = { ...req.body };

    if (password) {
      updates.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(req.user.id, updates, {
      new: true,
    }).select("-password");

    if (!updatedUser) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).send({ message: "Profile updated successfully", updatedUser });
  } catch (error) {
    res.status(500).send({ message: "Error updating profile" });
  }
};

const deleteuser = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).send({ message: "User ID is required" });
    }

    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    await Doctor.findOneAndDelete({ userId });
    await Appointment.deleteMany({ userId });

    return res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting user" });
  }
};

module.exports = {
  getuser,
  getallusers,
  login,
  register,
  updateprofile,
  deleteuser,
};
