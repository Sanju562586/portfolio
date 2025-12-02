require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Message = require("./models/Message");

const app = express();

// ===== CORS FIX FOR FRONTEND DEPLOYMENT =====
app.use(cors({
  origin: "*", // or specify your Netlify URL for more security
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

// Middleware
app.use(express.json());

// ===== MONGODB CONNECTION =====
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => {
    console.error("MongoDB Connection Error:", err);
  });

// ===== ROUTES =====
app.post("/api/contact", async (req, res) => {
  try {
    const { fullname, email, message } = req.body;

    if (!fullname || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }

    const newMessage = new Message({ fullname, email, message });
    await newMessage.save();

    return res.json({ success: true, message: "Message saved successfully" });
  } catch (error) {
    console.error("Error saving message:", error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
});

// ===== SERVER START =====
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
