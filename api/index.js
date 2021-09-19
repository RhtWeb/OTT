const express = require("express");
const mongoose = require("mongoose");
const donenv = require("dotenv");
const authRoutes = require("./routes/auth");

const app = express();
donenv.config();

mongoose.connect(process.env.DB_URI)
  .then(() => console.log("DB connected!"))
  .catch(err => console.log(err.message));

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(7000, () => {
  console.log("Backend server running!");
});