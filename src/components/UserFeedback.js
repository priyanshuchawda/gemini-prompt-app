import React, { useState } from 'react';

function UserFeedback() {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the feedback to a server or log it
    console.log('Feedback submitted:', { rating, comments });
    setSubmitted(true);
  };

  return (
    <div className="prompt-container">
      <h3>Feedback on Generated Content</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rating (1-5):</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Comments:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Enter your feedback here..."
            rows="4"
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>

      {submitted && <div className="success">Thank you for your feedback!</div>}
    </div>
  );
}

export default UserFeedback;

