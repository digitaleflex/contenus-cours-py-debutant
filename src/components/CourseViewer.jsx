import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const CourseViewer = () => {
  const { weekNumber } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [modules, setModules] = useState([]);
  const [currentModule, setCurrentModule] = useState('');

  useEffect(() => {
    // Charger la liste des modules pour cette semaine
    fetch(`/cours/semaine${weekNumber}/`)
      .then(response => response.json())
      .then(files => {
        const mdFiles = files.filter(file => file.endsWith('.md'));
        setModules(mdFiles);
        if (mdFiles.length > 0) {
          loadModule(mdFiles[0]);
        }
      })
      .catch(error => console.error('Erreur:', error));
  }, [weekNumber]);

  const loadModule = (moduleName) => {
    fetch(`/cours/semaine${weekNumber}/${moduleName}`)
      .then(response => response.text())
      .then(text => {
        setMarkdown(text);
        setCurrentModule(moduleName);
      })
      .catch(error => console.error('Erreur:', error));
  };

  return (
    <div className="max-w-5xl mx-auto p-6 relative">
      {/* Sélecteur de module */}
      <div className="mb-6">
        <div className="text-cyber-blue font-mono text-sm mb-2">
          {'>'} ./load_module --week={weekNumber}
        </div>
        <div className="flex gap-2">
          {modules.map(module => (
            <button
              key={module}
              onClick={() => loadModule(module)}
              className={`px-4 py-2 rounded font-mono text-sm ${
                currentModule === module
                  ? 'bg-cyber-blue/20 text-cyber-neon'
                  : 'text-cyber-blue hover:bg-cyber-blue/10'
              }`}
            >
              {module.replace('.md', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Contenu du module */}
      <div className="prose prose-invert bg-terminal-black rounded-lg p-8 shadow-xl border border-cyber-blue/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-blue/10 to-transparent animate-scan"></div>
        
        <ReactMarkdown
          className="text-gray-100 font-mono relative z-10"
          components={{
            code: ({node, inline, className, children, ...props}) => (
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-cyber-blue/20 blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <code className="relative bg-terminal-black border border-cyber-blue/30 rounded p-4 block" {...props}>
                  <div className="flex justify-between items-center mb-2 text-xs text-cyber-blue">
                    <span>code.py</span>
                    <button 
                      onClick={() => navigator.clipboard.writeText(children.toString())}
                      className="bg-cyber-blue/20 hover:bg-cyber-blue/40 px-2 py-1 rounded transition-all"
                    >
                      [COPIER]
                    </button>
                  </div>
                  {children}
                </code>
              </div>
            ),
            h1: ({node, ...props}) => (
              <h1 {...props} className="text-cyber-neon font-mono border-b border-cyber-blue/30 pb-2" />
            ),
            h2: ({node, ...props}) => (
              <h2 {...props} className="text-cyber-blue font-mono mt-8" />
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default CourseViewer; 