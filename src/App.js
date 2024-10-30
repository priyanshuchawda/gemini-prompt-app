import React, { useState } from 'react';
import './App.css';
import PromptInput from './components/PromptInput';
import PromptAPI from './components/PromptAPI';
import TextClassification from './components/TextClassification';
import ContentComposer from './components/ContentComposer';
import TextSummarizer from './components/TextSummarizer';
import TitleGenerator from './components/TitleGenerator';
import PromptTemplates from './components/PromptTemplates';
import InteractivePrompts from './components/InteractivePrompts';
import UserFeedback from './components/UserFeedback'; // Import the new component

function App() {
  const [prompt, setPrompt] = useState('');

  const handleTemplateSelect = (templateContent) => {
    setPrompt(templateContent);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gemini AI Prompt</h1>
      </header>
      <main>
        <PromptInput prompt={prompt} setPrompt={setPrompt} />
        <PromptAPI />
        <TextClassification />
        <ContentComposer />
        <TextSummarizer />
        <TitleGenerator />
        <PromptTemplates onSelect={handleTemplateSelect} />
        <InteractivePrompts />
        <UserFeedback /> {/* Add the new component here */}
        {/* Other components can be added here as needed */}
      </main>
    </div>
  );
}

export default App;
