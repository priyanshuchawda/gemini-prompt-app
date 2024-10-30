import React, { useState } from 'react';
import model from '../config/gemini';
import { handleError } from '../utils/errorHandler'; // Import the error handler

function TextSummarizer() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Call the model to summarize the text
      const result = await model.summarizeText(text); // Assuming the model has a summarizeText method
      setSummary(result.summary); // Assuming the model returns an object with a 'summary' property
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
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to summarize..."
          rows="4"
          disabled={loading}
        />
        <button type="submit" disabled={loading || !text.trim()}>
          {loading ? 'Summarizing...' : 'Summarize Text'}
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      {summary && (
        <div className="response">
          <h3>Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default TextSummarizer;
