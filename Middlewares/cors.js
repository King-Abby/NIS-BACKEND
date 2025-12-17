const cors = require("cors");

const corsMiddleware = cors({
  origin: "https://nis-frontend-eight.vercel.app/",
  methods: ["POST", "OPTIONS"],
  credentials: true,
});

module.exports = corsMiddleware;
