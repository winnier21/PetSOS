const API_URL = import.meta.env.VITE_API_URL; 
const prePrompt = "Give the response with medical procedures in numbered list without leading spaces";

export const getChatGPTResponse = async (prompt) => {
  try {
    const fullPrompt = `${prePrompt}\n\n${prompt}`;
    const response = await fetch(`${API_URL}/api/homepage/getChatGPTResponse`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({ prompt: fullPrompt })
    });

    const contentType = response.headers.get('content-type');
    if (!response.ok || !contentType || !contentType.includes('application/json')) {
      const errorText = await response.text(); // Read the error as text
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const data = await response.json();
    if (!data.response) {
      throw new Error("No response received from OpenAI.");
    }
    return data.response;
  } catch (error) {
    console.error("Error fetching response from OpenAI:", error);
    throw error; 
  }
};

