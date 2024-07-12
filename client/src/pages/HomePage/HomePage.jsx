import { useState } from 'react';
import { getChatGPTResponse } from '../../utils/chatgptApi';
import Header from '../../components/Header/Header';

import "./HomePage.scss";

function HomePage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 
    try {
      const apiResponse = await getChatGPTResponse(prompt);
      setResponse(apiResponse);
    } catch (error) {
      setError(`Failed to fetch response from API. Error: ${error.message}`);
      console.error("Error fetching ChatGPT response:", error);
    }
  };

  return (
    <main>
      <Header />
      <section className='homepage'>
      <h2 className='homepage-heading'>Do you have any pet emergency?</h2>
      <form className="homepage-form" onSubmit={handleSubmit}>
        <textarea
          className='homepage-textarea'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows="4"
          cols="50"
          placeholder="Tell me what happened to your pet..."
        />
        <br />
        <button className="homepage-button" type="submit">Get Response</button>
      </form>
      {error && <p className="error">{error}</p>}
      {response && (
        <section className='homepage-answer-area'>
          <h2 className='homepage-answer-title'>PetSOS says...</h2>
          <p className='homepage-answer-response'>{response}</p>
        </section>
      )} 
      </section>
    </main>
  );
}

export default HomePage;
