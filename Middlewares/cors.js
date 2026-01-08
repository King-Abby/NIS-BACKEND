const cors = require("cors");

const corsMiddleware = cors({
  origin: ["http://localhost:5173", "https://nis-frontend-eight.vercel.app/"],
  methods: ["POST"],
  credentials: true,
});

module.exports = corsMiddleware;
