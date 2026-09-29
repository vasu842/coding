import React, { useState } from 'react';

export default function App() {
  const [projectType, setProjectType] = useState('E-Commerce Web Application');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);
  const [activeTab, setActiveTab] = useState('rootPlan');

  const projectOptions = [
    'E-Commerce Web Application',
    'SaaS Analytics Dashboard',
    'Social Media App',
    'AI Chatbot Application',
    'Blogging & CMS Platform',
    'REST API Backend Microservice'
  ];

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/generate-project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectType, title, description }),
      });

      if (!response.ok) throw new Error('Server connection error');
      const data = await response.json();
      setOutput(data);
    } catch (err) {
      // Fallback response if backend is offline
      setOutput({
        rootPlan: `1. Setup project folder structure for ${title}.\n2. Configure routes and components for ${projectType}.\n3. Initialize local state management and database connection.`,
        html: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>${title}</title>\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>`,
        css: `body { background: #0f172a; color: white; font-family: sans-serif; }`,
        mainJs: `console.log("Initialized ${title} successfully.");`,
        appJsx: `export default function App() {\n  return <h1>Welcome to ${title} (${projectType})</h1>;\n}`,
        sql: `CREATE DATABASE ${title.toLowerCase().replace(/[^a-z0-0]/g, '_')}_db;\nUSE ${title.toLowerCase().replace(/[^a-z0-0]/g, '_')}_db;`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="mb-8 border-b border-slate-700 pb-4">
        <h1 className="text-3xl font-bold text-blue-400">⚡ AI ProjectGPT Creator</h1>
        <p className="text-slate-400">Generate architectural plans and code bases across various web project types.</p>
      </header>

      <form onSubmit={handleGenerate} className="bg-slate-800 p-6 rounded-lg space-y-4 mb-8">
        <div>
          <label className="block text-sm font-semibold mb-2">Project Type:</label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full bg-slate-700 p-2.5 rounded text-white border border-slate-600 focus:outline-none focus:border-blue-500"
          >
            {projectOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Project Name:</label>
          <input
            type="text"
            required
            placeholder="e.g. EcoStore, DevFlow Dashboard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-slate-700 p-2.5 rounded text-white border border-slate-600 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Description & Features:</label>
          <textarea
            required
            rows="3"
            placeholder="Describe key requirements, user roles, database models..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-slate-700 p-2.5 rounded text-white border border-slate-600 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 font-bold py-2.5 px-6 rounded text-white transition-colors disabled:bg-slate-600"
        >
          {loading ? 'Generating Codebase...' : 'Generate Full Codebase'}
        </button>
      </form>

      {output && (
        <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
          <div className="flex border-b border-slate-700 bg-slate-900 overflow-x-auto">
            {['rootPlan', 'html', 'css', 'mainJs', 'appJsx', 'sql'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 font-mono text-sm uppercase font-bold border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-400 bg-slate-800'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                {tab === 'rootPlan' ? 'Root Plan' : tab}
              </button>
            ))}
          </div>

          <div className="p-4 bg-slate-950 font-mono text-sm overflow-x-auto min-h-[300px]">
            <pre className="text-emerald-400 whitespace-pre-wrap">{output[activeTab]}</pre>
          </div>
        </div>
      )}
    </div>
  );
}