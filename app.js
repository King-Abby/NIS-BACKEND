const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/connectDb");
const colors = require("colors");

const authRouter = require("./routes/auth");
const corsMiddleware = require("./Middlewares/cors");

dotenv.config({ path: ".env" });

const app = express();

/* ✅ CORS MUST COME FIRST */
app.use(corsMiddleware);
app.options("*", corsMiddleware); // ✅ allow preflight requests

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.use("/api/auth", authRouter);

connectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`.yellow.bold);
});
