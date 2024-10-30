import React, { useState } from 'react';

const steps = [
  {
    id: 1,
    question: 'What is your name?',
    placeholder: 'Enter your name...',
  },
  {
    id: 2,
    question: 'What is your profession?',
    placeholder: 'Enter your profession...',
  },
  {
    id: 3,
    question: 'What are your hobbies?',
    placeholder: 'Enter your hobbies...',
  },
  // Add more steps as needed
];

function InteractivePrompts() {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState(Array(steps.length).fill(''));

  const handleChange = (e) => {
    const newResponses = [...responses];
    newResponses[currentStep] = e.target.value;
    setResponses(newResponses);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle final submission of responses
    alert(`Your responses: ${responses.join(', ')}`);
  };

  return (
    <div className="prompt-container">
      <h3>{steps[currentStep].question}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={responses[currentStep]}
          onChange={handleChange}
          placeholder={steps[currentStep].placeholder}
        />
        <div>
          <button type="button" onClick={handlePrevious} disabled={currentStep === 0}>
            Previous
          </button>
          <button type="button" onClick={handleNext} disabled={currentStep === steps.length - 1}>
            Next
          </button>
          {currentStep === steps.length - 1 && (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default InteractivePrompts;

