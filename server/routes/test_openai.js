const dotenv = require('dotenv');
const OpenAI = require('openai');

dotenv.config();  // Load environment variables

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,  // Use the API key from environment variables
});

async function testOpenAI() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello, how are you?" }],
      temperature: 1,
      max_tokens: 50,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    console.log('Response from OpenAI:', response);
  } catch (error) {
    console.error("Error fetching response from OpenAI:", error);
    if (error.response) {
      console.error("Error response status:", error.response.status);
      console.error("Error response data:", error.response.data);
    } else {
      console.error("Error response:", error.message);
    }
  }
}

testOpenAI();
