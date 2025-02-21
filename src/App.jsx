import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router'
import './index.css'

// Fusion de main.jsx et App.jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)

// Export du composant App pour la cohérence
function App() {
  return <Router />;
}

export default App; 