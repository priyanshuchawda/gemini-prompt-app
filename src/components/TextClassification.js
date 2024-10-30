import React, { useState } from 'react';
import model from '../config/gemini';

function TextClassification() {
  const [text, setText] = useState('');
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      console.log(model); // Debugging line
      const result = await model.classifyText(text);
      setTags(result.tags);
    } catch (err) {
      setError('Error classifying text. Please try again.');
      console.error('Error:', err);
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
          placeholder="Enter text to classify..."
          rows="4"
          disabled={loading}
        />
        <button type="submit" disabled={loading || !text.trim()}>
          {loading ? 'Classifying...' : 'Classify Text'}
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      {tags.length > 0 && (
        <div className="response">
          <h3>Extracted Tags:</h3>
          <p>{tags.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default TextClassification;
