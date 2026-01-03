const cors = require("cors");

const corsMiddleware = cors({
  origin: ["https://nis-frontend-eight.vercel.app/", "http://localhost:5173"],
  methods: ["POST", "OPTIONS"],
  credentials: true,
});

module.exports = corsMiddleware;
