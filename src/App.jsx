import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CourseViewer from './components/CourseViewer';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-900 text-white">
        <Sidebar />
        <main className="ml-64 flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/semaine/0/module/1" replace />} />
            <Route 
              path="/semaine/:weekNumber/module/:moduleNumber" 
              element={<CourseViewer />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 