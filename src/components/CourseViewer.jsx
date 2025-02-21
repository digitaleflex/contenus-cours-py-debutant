import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MarkdownConverter from './markdown/MarkdownConverter';

const CourseViewer = () => {
  const { weekNumber, moduleNumber } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const filePath = `/cours/semaine${weekNumber}/module${moduleNumber}.md`;
        console.log('Tentative de chargement du fichier:', filePath);
        
        const response = await fetch(filePath);
        console.log('Status de la réponse:', response.status);
        
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const text = await response.text();
        console.log('Contenu chargé:', text.substring(0, 100) + '...');
        
        setMarkdown(text);
        setError(null);
      } catch (err) {
        console.error('Erreur détaillée:', err);
        setError(`Erreur de chargement: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [weekNumber, moduleNumber]);

  if (loading) {
    return (
      <div className="p-6 text-cyber-blue font-mono">
        <div className="animate-pulse">Chargement du module...</div>
      </div>
    );
  }

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
      <div className="bg-terminal-black rounded-lg p-8 shadow-xl border border-cyber-blue/20">
        <MarkdownConverter content={markdown} />
      </div>
    </div>
  );
};

export default CourseViewer; 