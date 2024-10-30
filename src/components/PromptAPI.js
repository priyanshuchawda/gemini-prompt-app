import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai'; // Import the correct class
import { handleError } from '../utils/errorHandler'; // Import the error handler

function PromptAPI() {
  const [model, setModel] = useState(null);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeModel = async () => {
      try {
        // Initialize the GoogleGenerativeAI instance
        const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
        const newModel = genAI.getGenerativeModel({ model: "gemini-pro" });
        setModel(newModel);
      } catch (err) {
        setError(handleError(err)); // Use the error handler
      }
    };

    initializeModel();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!model) {
      setError('Model is not initialized. Please try again later.');
      return;
    }

    if (!input.trim()) {
      setError('Input cannot be empty. Please enter a prompt.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await model.generateContent(input);
      setResponse(result.text);
    } catch (err) {
      setError(handleError(err)); // Use the error handler
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your prompt here..."
          rows="4"
          disabled={loading}
        />
        <button type="submit" disabled={loading || !input.trim()}>
          {loading ? 'Generating...' : 'Submit'}
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      {response && <div className="response">{response}</div>}
    </div>
  );
}

export default PromptAPI;
