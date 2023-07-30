const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { Test } = require("./models/Test");

const app = express();
dotenv.config();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.post("/users/:id/update", (req, res) => {
  const responseData = {
    data: req.body,
  };
  console.log(req.body);
  return res.json(responseData);
});

app.get("/test/getTest/:id", async (req, res) => {
  const { id } = req.params;
  const user = await Test.findById(id);

  return res.json(user);
});

app.post("/test", async (req, res) => {
  console.log(req.body);
  const { formData } = req.body;
  await Test.create({
    username: formData.username,
    email: formData.email,
    password: formData.password,
  });
});

app.get("/test/getTests", async (req, res) => {
  const data = await Test.find({});
  console.log(data);
  return res.json(data);
});

app.post("/test/loginTest", async (req, res) => {
  const { formData } = req.body;

  const user = await Test.findOne({ email: formData.email });

  if (!user) return res.json({ message: "no user" });

  isPasswordCorrect = user.password === formData.password;

  if (!isPasswordCorrect) return res.json({ message: "wrong password" });

  const userId = user._id;
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  console.log(token);
  try {
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    res.json(user.username);
    console.log("cookie sent");
  } catch (err) {
    console.log(err);
  }
});

app.patch("/test/updateTest/:id", async (req, res) => {
  const { id } = req.params;
  const { formData } = req.body;
  console.log(formData, id);
  const response = await Test.findByIdAndUpdate(id, { ...formData });
  return res.json(response);
});

app.delete("/test/deleteTest/:id", async (req, res) => {
  const { id } = req.params;

  const response = await Test.findByIdAndDelete(id);
  return res.json(response);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
