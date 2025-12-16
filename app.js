const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/connectDb");
const bcrypt = require("bcrypt");
const colors = require("colors");

const authRouter = require("./routes/user");
const corsMiddleware = require("./Middlewares/cors");

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/auth", authRouter);

dotenv.config({ path: ".env" });

connectDB();

const port = 5000;

const server = app.listen(
  port,
  console.log(`Server running on port ${port}`.yellow.bold)
);
// sqQrtmiLxpVrByKk
