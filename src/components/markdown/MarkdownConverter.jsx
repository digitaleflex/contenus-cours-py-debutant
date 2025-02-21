import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MarkdownConverter = ({ content }) => {
  return (
    <ReactMarkdown
      className="prose prose-invert max-w-none"
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              style={atomDark}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        // Personnalisation des titres
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold text-cyber-neon mb-6">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl font-bold text-cyber-blue mt-8 mb-4">{children}</h2>
        ),
        // Personnalisation des listes
        ul: ({ children }) => (
          <ul className="list-disc list-inside space-y-2 text-gray-300">{children}</ul>
        ),
        // Personnalisation des liens
        a: ({ children, href }) => (
          <a href={href} className="text-cyber-blue hover:text-cyber-neon underline">
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownConverter; 