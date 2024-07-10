// import express from 'express';
// import fetch from 'node-fetch';
// import dotenv from 'dotenv';
// import { Router } from 'express';

// dotenv.config(); 

// const router = Router();

// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
// const OPENAI_API_URL = "https://api.openai.com/v1/completions";

// router.post('/getChatGPTResponse', async (req, res) => {
//     const { prompt } = req.body;
//     try {
//         const response = await fetch(OPENAI_API_URL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${OPENAI_API_KEY}`
//             },
//             body: JSON.stringify({
//                 prompt: prompt,
//                 max_tokens: 100,
//                 temperature: 0.5
//             })
//         });

//         const data = await response.json();
//         res.send(data.choices[0].text.trim());
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).send("An error occurred while fetching the response from OpenAI.");
//     }
// });

// export default router;

// import express from 'express';
// import fetch from 'node-fetch';
// import dotenv from 'dotenv';
// import { Router } from 'express';

// dotenv.config();  // Ensure this is at the top to load environment variables early

// const router = Router();

// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
// const OPENAI_API_URL = "https://api.openai.com/v1/completions";

// router.post('/getChatGPTResponse', async (req, res) => {
//     const { prompt } = req.body;
//     try {
//         const response = await fetch(OPENAI_API_URL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${OPENAI_API_KEY}`
//             },
//             body: JSON.stringify({
//                 model: "gpt-3.5-turbo",  // Specify the model
//                 prompt: prompt,
//                 max_tokens: 100,
//                 temperature: 0.5
//             })
//         });

//         // Check if response is JSON
//         const contentType = response.headers.get('content-type');
//         if (!response.ok || !contentType || !contentType.includes('application/json')) {
//             const errorText = await response.text(); // Read the error as text
//             console.error(`HTTP error! status: ${response.status}, message: ${errorText}`);
//             throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
//         }

//         const data = await response.json();
//         if (!data.choices || data.choices.length === 0) {
//             console.error("No choices available in the response.");
//             throw new Error("No choices available in the response.");
//         }
//         res.json({ response: data.choices[0].text.trim() });
//     } catch (error) {
//         console.error("Error fetching response from OpenAI:", error);
//         res.status(500).send("An error occurred while fetching the response from OpenAI.");
//     }
// });

// export default router;
import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();  // Ensure this is at the top to load environment variables early

const router = express.Router();

console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/getChatGPTResponse', async (req, res) => {
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


    // Capture detailed error response
    if (error.response) {
        console.error("Error response status:", error.response.status);
        console.error("Error response data:", error.response.data);
      } else {
        console.error("Error response:", error);
      }
    res.status(500).send("An error occurred while fetching the response from OpenAI.");
  }
});

export default router;
