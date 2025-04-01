import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home';

// Initialize the query client
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={
            <div className="flex items-center justify-center min-h-screen pt-10">
              <HomePage />
            </div>
          } />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}