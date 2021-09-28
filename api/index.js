const express = require("express");
const mongoose = require("mongoose");
const donenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoutes = require("./routes/lists");

const app = express();
donenv.config();

mongoose.connect(process.env.DB_URI)
  .then(() => console.log("DB connected!"))
  .catch(err => console.log(err.message));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/movie", movieRoute);
app.use("/api/list", listRoutes);

app.listen(7000, () => {
  console.log("Backend server running!");
});