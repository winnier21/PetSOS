import { useState } from 'react';
import { getChatGPTResponse } from '../../utils/chatgptApi'; // Ensure you have this function created
import PageTop from '../../components/PageTop/PageTop';
import "./HomePage.scss";

function HomePage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiResponse = await getChatGPTResponse(prompt);
    setResponse(apiResponse);
  };

  return (
    <div>
        <PageTop />
      <h1>Welcome to Home Page</h1>
      <form onSubmit={handleSubmit}>
        <textarea className='homepage-textarea'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows="4"
          cols="50"
          placeholder="Enter your prompt here..."
        />
        <br />
        <button type="submit">Get Response</button>
      </form>
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