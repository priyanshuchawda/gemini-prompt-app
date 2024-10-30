import React from 'react';

const templates = [
  {
    id: 1,
    title: 'Email Template',
    content: 'Dear [Name],\n\nI hope this message finds you well. I wanted to reach out regarding...',
  },
  {
    id: 2,
    title: 'Resume Summary',
    content: 'Dedicated professional with experience in [Field]. Proven track record of...',
  },
  {
    id: 3,
    title: 'Social Media Bio',
    content: 'Passionate about [Interest]. Sharing insights on [Topic]. Join me on my journey...',
  },
  // Add more templates as needed
];

function PromptTemplates({ onSelect }) {
  return (
    <div className="prompt-container">
      <h3>Available Prompt Templates</h3>
      <ul>
        {templates.map((template) => (
          <li key={template.id}>
            <button onClick={() => onSelect(template.content)}>
              {template.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PromptTemplates;
