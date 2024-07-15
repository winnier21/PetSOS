import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY);
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/getChatGPTResponse", async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const message = response.choices[0].message.content.trim();
    res.json({ response: message });
  } catch (error) {
    console.error("Error fetching response from OpenAI:", error);

    if (error.response) {
      console.error("Error response status:", error.response.status);
      console.error("Error response data:", error.response.data);
    } else {
      console.error("Error response:", error);
    }
    res
      .status(500)
      .send("An error occurred while fetching the response from OpenAI.");
  }
});

export default router;
