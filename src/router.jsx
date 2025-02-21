import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import CourseViewer from './components/CourseViewer';

// Layouts
import MainLayout from './components/layouts/MainLayout';

// Pages d'erreur
import NotFound from './components/errors/NotFound';
import ErrorBoundary from './components/errors/ErrorBoundary';

// Configuration des routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      // Redirection racine
      {
        index: true,
        element: <Navigate to="/cours/semaine0/module1" replace />
      },

      // Routes des cours
      {
        path: "cours",
        children: [
          // Route pour chaque semaine
          {
            path: "semaine:weekNumber",
            children: [
              // Route pour chaque module
              {
                path: "module:moduleNumber",
                element: <CourseViewer />,
                errorElement: <NotFound />
              }
            ]
          }
        ]
      },

      // Route 404
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});

// Composant Router principal
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router; 