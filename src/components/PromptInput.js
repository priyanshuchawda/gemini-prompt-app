import React, { useState } from 'react';
import model from '../config/gemini';

function PromptInput({ prompt, setPrompt }) {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Generate content using Gemini
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      setResponse(text);
    } catch (err) {
      setError('Error generating response. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="prompt-container">
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          rows="4"
          disabled={loading}
        />
        <button type="submit" disabled={loading || !prompt.trim()}>
          {loading ? 'Generating...' : 'Generate Response'}
        </button>
      </form>
      
      {error && (
        <div className="error">
          {error}
        </div>
      )}
      
      {response && (
        <div className="response">
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default PromptInput;
