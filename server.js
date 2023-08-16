if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

// Put all API endpoints under '/api'
app.post("/api/inspire", async (req, res) => {
  if (!req.body) return res.sendStatus(400);
  if (!req.body.prompt) return res.sendStatus(400);
  try {
    let response = await fetch("https://api.edenai.run/v2/image/generation", {
      method: "POST",
      body: JSON.stringify({
        providers: "openai",
        text: req.body.prompt,
        resolution: "512x512",
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.body.apiKey || process.env.EDENAI_API_KEY}`,
      },
    });
    let data = await response.json();
    return res.json(data);
  } catch (err) {
    console.log("Error in the inspiration step", err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
