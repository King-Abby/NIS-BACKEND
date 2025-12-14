const cors = require("cors");

const corsMiddleware = cors({
  origin: "http://localhost:5173", 
  methods: ["POST", "OPTIONS"],
  credentials: true, 
});

module.exports = corsMiddleware;
