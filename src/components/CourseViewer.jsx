import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const CourseViewer = () => {
  const { weekNumber, moduleNumber } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const filePath = `/cours/semaine${weekNumber}/module${moduleNumber}.md`;
        console.log(`Fetching: ${filePath}`);
        
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        setMarkdown(text);
        setError(null);
      } catch (err) {
        console.error('Erreur de chargement:', err);
        setError(err.message);
      }
    };

    fetchContent();
  }, [weekNumber, moduleNumber]);

  if (error) {
    return (
      <div className="p-6 text-cyber-red font-mono">
        <h2 className="text-xl mb-4">Erreur de chargement</h2>
        <p>{error}</p>
        <pre className="mt-4 p-2 bg-terminal-black/50 rounded">
          Tentative de chargement: /cours/semaine{weekNumber}/module{moduleNumber}.md
        </pre>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <ReactMarkdown className="prose prose-invert">
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default CourseViewer; 