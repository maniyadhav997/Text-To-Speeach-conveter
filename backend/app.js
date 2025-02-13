const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Text-to-Speech Endpoint
app.post("/api/convert", async (req, res) => {
  const { text, voice } = req.body;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/audio/speech",
      {
        model: "tts-1",
        input: text,
        voice: voice || "alloy", // Default voice
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer", // To handle binary audio data
      }
    );

    // Convert audio data to base64
    const audioBase64 = Buffer.from(response.data, "binary").toString("base64");
    const audioUrl = `data:audio/mp3;base64,${audioBase64}`;

    res.json({ audioUrl });
  } catch (error) {
    console.error("Error converting text to speech:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to convert text to speech" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});