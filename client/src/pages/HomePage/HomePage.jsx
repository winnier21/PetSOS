import { useState } from 'react';
import { getChatGPTResponse } from '../../utils/chatgptApi';
import PageTop from '../../components/PageTop/PageTop.jsx'

import "./HomePage.scss";

function HomePage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state
    try {
      const apiResponse = await getChatGPTResponse(prompt);
      setResponse(apiResponse);
    } catch (error) {
      setError(`Failed to fetch response from API. Error: ${error.message}`);
      console.error("Error fetching ChatGPT response:", error);
    }
  };

  return (
    <div>
      <PageTop />
      <h1>Welcome to Home Page</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className='homepage-textarea'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows="4"
          cols="50"
          placeholder="Enter your prompt here..."
        />
        <br />
        <button type="submit">Get Response</button>
      </form>
      {error && <p className="error">{error}</p>}
      {response && (
        <div>
          <h2>Response from ChatGPT:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
