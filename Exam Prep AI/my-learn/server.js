import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch"; // if you use node18+, built-in fetch works

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Example AI summarizer endpoint
app.post("/api/summarize", async (req, res) => {
  const { text } = req.body;

  // Normally, you’d call OpenAI or HuggingFace here
  // For now, let's simulate
  const fakeSummary =
    text.length > 50
      ? text.slice(0, 50) + "... (summary generated)"
      : "Too short, nothing to summarize.";

  res.json({ summary: fakeSummary });
});

app.listen(5000, () => console.log("✅ AI Backend running on http://localhost:5000"));
