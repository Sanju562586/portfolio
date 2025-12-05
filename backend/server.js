require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Message = require("./models/Message");

const app = express();

// ===== CORS FIX FOR FRONTEND DEPLOYMENT =====
app.use(cors({
  origin: "*", // or specify your Netlify URL for more security
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

// Middleware
app.use(express.json());

// ===== MONGODB CONNECTION =====
mongoose.connect(process.env.MONGO_URI)
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

// GET /api/messages - List all messages
app.get("/api/messages", async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/messages/:id - Get single message
app.get("/api/messages/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.json(message);
  } catch (error) {
    console.error("Error fetching message:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE /api/messages/:id - Delete message
app.delete("/api/messages/:id", async (req, res) => {
  try {
    const deletedMessage = await Message.findByIdAndDelete(req.params.id);
    if (!deletedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    console.error("Error deleting message:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT /api/messages/:id - Update message
app.put("/api/messages/:id", async (req, res) => {
  try {
    const updatedMessage = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.json(updatedMessage);
  } catch (error) {
    console.error("Error updating message:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ===== SERVER START =====
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
