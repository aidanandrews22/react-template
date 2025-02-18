export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome to React Template</h1>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Edit <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">src/pages/Home.tsx</code> to customize this page
          </p>
        </div>
        
        <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Clerk Auth</li>
            <li>React Query</li>
          </ul>
        </div>
        
        <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <ul className="space-y-2">
            <li>
              <a href="https://vitejs.dev" target="_blank" rel="noopener" 
                className="text-blue-600 dark:text-blue-400 hover:underline">
                Vite Docs
              </a>
            </li>
            <li>
              <a href="https://clerk.com/docs" target="_blank" rel="noopener"
                className="text-blue-600 dark:text-blue-400 hover:underline">
                Clerk Docs
              </a>
            </li>
            <li>
              <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener"
                className="text-blue-600 dark:text-blue-400 hover:underline">
                Tailwind CSS Docs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
