const OPENAI_API_KEY = "sk-proj-csAdImj4z6xAKehxFpuvT3BlbkFJK38WAZVs2KK1WTkiTCxi";
const OPENAI_API_URL = "https://api.openai.com/v1/completions";

export const getChatGPTResponse = async (prompt) => {
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

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (!data.choices || data.choices.length === 0) {
      throw new Error("No choices available in the response.");
    }
    return data.choices[0].text.trim();
  } catch (error) {
    console.error("Error fetching response from OpenAI:", error);
    throw error; // Rethrow to be handled by caller
  }
};
