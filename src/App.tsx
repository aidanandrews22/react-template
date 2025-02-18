import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home';

// Initialize the query client
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <Routes>
            <Route path="/home" element={
              <div className="flex items-center justify-center min-h-screen">
                <HomePage />
              </div>
            } />
            <Route path="/" element={
              <>
                <div className="flex items-center justify-center min-h-screen">
                  <h1 className="text-4xl font-bold">React Template</h1>
                </div>
              </>
            } />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}