const OPENAI_API_KEY = "sk-proj-StKfw4flMGdXtAnlFIAFT3BlbkFJgGN5gbQgcW9mr3sfL5VR";
const OPENAI_API_URL = "https://api.openai.com/v1/engines/davinci-codex/completions";

export const getChatGPTResponse = async (prompt) => {
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
    return data.choices[0].text.trim();
};
