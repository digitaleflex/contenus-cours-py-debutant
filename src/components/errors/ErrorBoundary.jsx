import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="p-8 text-cyber-red font-mono">
      <h1 className="text-2xl mb-4">Erreur</h1>
      <p>{error.message || "Une erreur inattendue s'est produite."}</p>
    </div>
  );
};

export default ErrorBoundary; 