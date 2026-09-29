import React, { useState } from 'react';

export default function App() {
  const [projectType, setProjectType] = useState('E-Commerce Web Application');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
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

  const handleGenerate = (e) => {
    e.preventDefault();
    setOutput({
      rootPlan: `1. Setup project architecture for ${title}.\n2. Configure routes and components for ${projectType}.\n3. Setup database schema and local state.`,
      html: `<!DOCTYPE html>\n<html>\n  <head><title>${title}</title></head>\n  <body><div id="root"></div></body>\n</html>`,
      css: `body { background: #0f172a; color: white; font-family: sans-serif; }`,
      mainJs: `console.log("${title} app loaded.");`,
      appJsx: `export default function App() {\n  return <h1>Welcome to ${title}</h1>;\n}`,
      sql: `CREATE DATABASE ${title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_db;`
    });
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px', fontFamily: 'sans-serif', color: '#ffffff' }}>
      <header style={{ borderBottom: '1px solid #334155', paddingBottom: '16px', marginBottom: '24px' }}>
        <h1 style={{ color: '#60a5fa', fontSize: '28px', margin: '0 0 8px 0' }}>⚡ AI ProjectGPT Creator</h1>
        <p style={{ color: '#94a3b8', margin: 0 }}>Generate architectural plans and code bases across various project types.</p>
      </header>

      <form onSubmit={handleGenerate} style={{ background: '#1e293b', padding: '24px', borderRadius: '8px', marginBottom: '24px' }}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>Project Type:</label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            style={{ width: '100%', background: '#334155', color: '#fff', padding: '10px', borderRadius: '6px', border: '1px solid #475569' }}
          >
            {projectOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>Project Name:</label>
          <input
            type="text"
            required
            placeholder="e.g. EcoStore, DevFlow Dashboard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', background: '#334155', color: '#fff', padding: '10px', borderRadius: '6px', border: '1px solid #475569', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>Description & Features:</label>
          <textarea
            required
            rows="3"
            placeholder="Describe key requirements..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', background: '#334155', color: '#fff', padding: '10px', borderRadius: '6px', border: '1px solid #475569', boxSizing: 'border-box' }}
          ></textarea>
        </div>

        <button
          type="submit"
          style={{ background: '#2563eb', color: '#fff', fontWeight: 'bold', padding: '10px 24px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
        >
          Generate Full Codebase
        </button>
      </form>

      {output && (
        <div style={{ background: '#1e293b', borderRadius: '8px', border: '1px solid #334155', overflow: 'hidden' }}>
          <div style={{ display: 'flex', background: '#0f172a', borderBottom: '1px solid #334155' }}>
            {['rootPlan', 'html', 'css', 'mainJs', 'appJsx', 'sql'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '12px 16px',
                  background: activeTab === tab ? '#1e293b' : 'transparent',
                  color: activeTab === tab ? '#60a5fa' : '#94a3b8',
                  border: 'none',
                  borderBottom: activeTab === tab ? '2px solid #2563eb' : '2px solid transparent',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  textTransform: 'uppercase'
                }}
              >
                {tab === 'rootPlan' ? 'Root Plan' : tab}
              </button>
            ))}
          </div>

          <div style={{ padding: '16px', background: '#020617', fontFamily: 'monospace', minHeight: '250px' }}>
            <pre style={{ color: '#34d399', whiteSpace: 'pre-wrap', margin: 0 }}>{output[activeTab]}</pre>
          </div>
        </div>
      )}
    </div>
  );
}