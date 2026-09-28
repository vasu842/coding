import React, { useState } from 'react';

export default function App() {
  const [projectType, setProjectType] = useState('E-Commerce Website');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);
  const [activeTab, setActiveTab] = useState('rootPlan');

  const projectOptions = [
    'E-Commerce Website',
    'SaaS Dashboard',
    'Social Media App',
    'Blogging Platform',
    'Portfolio Website',
    'REST API Microservice'
  ];

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Try fetching from backend server if active
      const response = await fetch('http://localhost:5000/api/generate-project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectType, title, description }),
      });

      if (!response.ok) throw new Error('Backend server offline');
      const data = await response.json();
      setOutput(data);
    } catch (err) {
      // Fallback: Generate template directly on frontend if backend is offline
      setOutput({
        rootPlan: `1. Setup project structure for ${title}\n2. Configure routes and components for ${projectType}\n3. Connect database schema and initialize APIs.`,
        html: `<!DOCTYPE html>\n<html>\n  <head><title>${title}</title></head>\n  <body><div id="root"></div></body>\n</html>`,
        css: `body { background-color: #0f172a; color: white; font-family: sans-serif; }`,
        mainJs: `console.log("${title} initialized successfully.");`,
        appJsx: `export default function App() {\n  return <h1>Welcome to ${title} (${projectType})</h1>;\n}`,
        sql: `CREATE DATABASE ${title.toLowerCase().replace(/\s+/g, '_')}_db;\nUSE ${title.toLowerCase().replace(/\s+/g, '_')}_db;`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <header className="mb-8 border-b border-gray-700 pb-4">
        <h1 className="text-3xl font-bold text-blue-400">⚡ ProjectGPT Generator</h1>
        <p className="text-gray-400">Generate full-stack codebase blueprints instantly.</p>
      </header>

      <form onSubmit={handleGenerate} className="bg-gray-800 p-6 rounded-lg space-y-4 mb-8">
        <div>
          <label className="block text-sm font-semibold mb-2">Project Type:</label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full bg-gray-700 p-2.5 rounded text-white border border-gray-600"
          >
            {projectOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Project Title:</label>
          <input
            type="text"
            required
            placeholder="e.g. EcoStore, DevFlow Dashboard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-gray-700 p-2.5 rounded text-white border border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Description:</label>
          <textarea
            required
            rows="3"
            placeholder="Describe features..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-gray-700 p-2.5 rounded text-white border border-gray-600"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 font-bold py-2.5 px-6 rounded text-white"
        >
          {loading ? 'Generating...' : 'Generate Project'}
        </button>
      </form>

      {output && (
        <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
          <div className="flex border-b border-gray-700 bg-gray-900 overflow-x-auto">
            {['rootPlan', 'html', 'css', 'mainJs', 'appJsx', 'sql'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 font-mono text-sm uppercase font-bold border-b-2 ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-400 bg-gray-800'
                    : 'border-transparent text-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-4 bg-gray-950 font-mono text-sm overflow-x-auto min-h-[300px]">
            <pre className="text-green-400 whitespace-pre-wrap">{output[activeTab]}</pre>
          </div>
        </div>
      )}
    </div>
  );
}