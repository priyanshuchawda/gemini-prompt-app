import React, { useState } from 'react';
import model from '../config/gemini';
import { handleError } from '../utils/errorHandler'; // Import the error handler

function ContentComposer() {
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Call the model to generate content based on the prompt
      const result = await model.generateContent(prompt);
      setGeneratedContent(result.text); // Assuming the model returns an object with a 'text' property
    } catch (err) {
      setError(handleError(err)); // Use the error handler
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
          {loading ? 'Generating...' : 'Generate Content'}
        </button>
      </form>

      {error && <div className="error">{error}</div>}

      {generatedContent && (
        <div className="response">
          <h3>Generated Content:</h3>
          <p>{generatedContent}</p>
        </div>
      )}
    </div>
  );
}

export default ContentComposer;
