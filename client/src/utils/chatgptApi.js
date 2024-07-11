const API_URL = import.meta.env.VITE_API_URL; // Use the API URL from the environment variable

export const getChatGPTResponse = async (prompt) => {
  try {
    const response = await fetch(`${API_URL}/api/homepage/getChatGPTResponse`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt })
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
    throw error; // Rethrow to be handled by caller
  }
};

