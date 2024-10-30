import React, { useState } from 'react';
import model from '../config/gemini';

function TitleGenerator() {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Call the model to generate a title based on the content
      const result = await model.generateTitle(content); // Assuming the model has a generateTitle method
      setTitle(result.title); // Assuming the model returns an object with a 'title' property
    } catch (err) {
      setError('Error generating title. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="prompt-container">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter content to generate a title..."
          rows="4"
          disabled={loading}
        />
        <button type="submit" disabled={loading || !content.trim()}>
          {loading ? 'Generating...' : 'Generate Title'}
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      {title && (
        <div className="response">
          <h3>Generated Title:</h3>
          <p>{title}</p>
        </div>
      )}
    </div>
  );
}

export default TitleGenerator;
