import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { Router } from 'express';

dotenv.config();  // Ensure this is at the top to load environment variables early

const router = Router();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = "https://api.openai.com/v1/completions";

router.post('/getChatGPTResponse', async (req, res) => {
    const { prompt } = req.body;
    try {
        const response = await fetch(OPENAI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                prompt: prompt,
                max_tokens: 100,
                temperature: 0.5
            })
        });

        const data = await response.json();
        res.send(data.choices[0].text.trim());
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("An error occurred while fetching the response from OpenAI.");
    }
});

export default router;

