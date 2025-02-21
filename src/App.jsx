import { Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CourseViewer from './components/CourseViewer';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-terminal-black">
        <Sidebar />
        <main className="flex-1 ml-72">
          <Routes>
            <Route path="/" element={<Navigate to="/semaine0/module1" replace />} />
            <Route 
              path="/semaine:weekNumber/module:moduleNumber" 
              element={<CourseViewer />} 
            />
            <Route path="*" element={
              <div className="p-8 text-cyber-red font-mono">
                <h1 className="text-2xl mb-4">404 - Module Non Trouvé</h1>
                <p>Le module que vous recherchez n'existe pas.</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 