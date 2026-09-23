import React, { useState } from 'react';

// Mock database for SVPP B.Tech 2nd Year Results
const STUDENT_DATABASE = {
  "22G01A0501": {
    rollNumber: "22G01A0501",
    name: "K. RAHUL SHARMA",
    branch: "Computer Science & Engineering (CSE)",
    yearSem: "B.Tech II Year - I Semester",
    regulation: "R20",
    college: "Sri Venkateswara College of Engineering (SVPP / SVCE)",
    status: "PASSED",
    sgpa: 8.45,
    cgpa: 8.21,
    subjects: [
      { code: "20A05301T", name: "Discrete Mathematics", credits: 3, grade: "A+", status: "P" },
      { code: "20A05302T", name: "Data Structures & Algorithms", credits: 3, grade: "A", status: "P" },
      { code: "20A05303T", name: "Object Oriented Programming (Java)", credits: 3, grade: "O", status: "P" },
      { code: "20A05304T", name: "Computer Organization", credits: 3, grade: "B+", status: "P" },
      { code: "20A05305P", name: "Data Structures Lab", credits: 1.5, grade: "O", status: "P" },
      { code: "20A05306P", name: "Java Programming Lab", credits: 1.5, grade: "A+", status: "P" },
      { code: "20A52301", name: "Universal Human Values", credits: 2, grade: "A", status: "P" }
    ]
  },
  "22G01A0402": {
    rollNumber: "22G01A0402",
    name: "P. ANITHA REDDY",
    branch: "Electronics & Communication Engineering (ECE)",
    yearSem: "B.Tech II Year - II Semester",
    regulation: "R20",
    college: "Sri Venkateswara College of Engineering (SVPP / SVCE)",
    status: "PASSED",
    sgpa: 7.92,
    cgpa: 8.05,
    subjects: [
      { code: "20A04401T", name: "Electromagnetic Waves & Transmission Lines", credits: 3, grade: "B+", status: "P" },
      { code: "20A04402T", name: "Analog Circuits", credits: 3, grade: "A", status: "P" },
      { code: "20A04403T", name: "Signals and Systems", credits: 3, grade: "A+", status: "P" },
      { code: "20A04404T", name: "Analog Communications", credits: 3, grade: "B", status: "P" },
      { code: "20A04405P", name: "Analog Circuits Lab", credits: 1.5, grade: "O", status: "P" },
      { code: "20A04406P", name: "Analog Communications Lab", credits: 1.5, grade: "A+", status: "P" }
    ]
  }
};

export default function App() {
  const [searchInput, setSearchInput] = useState('');
  const [selectedSem, setSelectedSem] = useState('2-1');
  const [resultData, setResultData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const cleanRoll = searchInput.trim().toUpperCase();

    if (!cleanRoll) {
      setErrorMsg('Please enter a valid Hall Ticket / Roll Number.');
      setResultData(null);
      return;
    }

    if (STUDENT_DATABASE[cleanRoll]) {
      setResultData(STUDENT_DATABASE[cleanRoll]);
      setErrorMsg('');
    } else {
      setErrorMsg(`No 2nd Year B.Tech results found for Roll Number: "${cleanRoll}".`);
      setResultData(null);
    }
  };

  const handleReset = () => {
    setSearchInput('');
    setResultData(null);
    setErrorMsg('');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-lg print:hidden">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-white text-blue-900 rounded-full flex items-center justify-center font-extrabold text-2xl shadow-inner border-2 border-amber-400">
              SV
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-wide">SVPP / SVCE EXAMINATION PORTAL</h1>
              <p className="text-xs text-blue-200 mt-0.5">Sri Venkateswara College Results Engine & Marks Memo</p>
            </div>
          </div>
          <div className="bg-blue-800/60 border border-blue-700/50 rounded-xl px-4 py-2 text-center md:text-right">
            <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider block">Academic Session</span>
            <span className="text-sm font-bold text-white">B.Tech 2nd Year Regular / Supply Results</span>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 py-8">
        {/* Search Panel */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8 print:hidden">
          <h2 className="text-lg font-bold text-slate-800 mb-1">Check Examination Results</h2>
          <p className="text-xs text-slate-500 mb-6">Enter your 10-digit Hall Ticket Number to retrieve your B.Tech 2nd Year mark statement.</p>

          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Select Semester</label>
              <select
                value={selectedSem}
                onChange={(e) => setSelectedSem(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="2-1">B.Tech II Year I Semester (2-1)</option>
                <option value="2-2">B.Tech II Year II Semester (2-2)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Hall Ticket / Roll Number</label>
              <input
                type="text"
                placeholder="e.g. 22G01A0501"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 uppercase focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="flex items-end gap-2">
              <button
                type="submit"
                className="flex-1 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl transition duration-150 shadow-md text-sm"
              >
                Get Results
              </button>
              {resultData && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-3 px-4 rounded-xl transition text-sm"
                >
                  Clear
                </button>
              )}
            </div>
          </form>

          {/* Quick Demo Roll Suggestions */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold">Sample Roll Numbers:</span>
            <button onClick={() => { setSearchInput("22G01A0501"); }} className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-mono hover:underline">22G01A0501 (CSE)</button>
            <button onClick={() => { setSearchInput("22G01A0402"); }} className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-mono hover:underline">22G01A0402 (ECE)</button>
          </div>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-xl mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-rose-600 font-bold text-lg">⚠️</span>
              <p className="text-sm font-semibold text-rose-800">{errorMsg}</p>
            </div>
          </div>
        )}

        {/* Result Statement Card */}
        {resultData && (
          <div className="bg-white rounded-2xl shadow-md border border-slate-300 overflow-hidden print:shadow-none print:border-none">
            {/* Memo Header */}
            <div className="bg-slate-900 text-white p-6 border-b-4 border-amber-400">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-black tracking-tight">{resultData.college}</h2>
                  <p className="text-xs text-slate-300 mt-1 uppercase font-semibold tracking-wider">Official Grade Report & Statement of Marks</p>
                </div>
                <span className="hidden print:block text-xs text-slate-400">Official Web Copy</span>
                <button
                  onClick={() => window.print()}
                  className="print:hidden bg-amber-400 hover:bg-amber-500 text-slate-950 px-4 py-2 rounded-lg font-bold text-xs shadow-sm transition"
                >
                  🖨️ Print Result Memo
                </button>
              </div>
            </div>

            {/* Student Meta Details */}
            <div className="p-6 bg-slate-50/50 border-b border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-sm">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Student Name:</span>
                  <span className="font-bold text-slate-900">{resultData.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Roll Number:</span>
                  <span className="font-mono font-bold text-blue-700">{resultData.rollNumber}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Branch / Course:</span>
                  <span className="font-semibold text-slate-800">{resultData.branch}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Semester / Reg:</span>
                  <span className="font-semibold text-slate-800">{resultData.yearSem} ({resultData.regulation})</span>
                </div>
              </div>
            </div>

            {/* Marks Table */}
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 uppercase font-bold border-b-2 border-slate-300">
                    <th className="py-3 px-4">Subject Code</th>
                    <th className="py-3 px-4">Subject Title</th>
                    <th className="py-3 px-4 text-center">Credits</th>
                    <th className="py-3 px-4 text-center">Grade</th>
                    <th className="py-3 px-4 text-center">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium text-slate-800">
                  {resultData.subjects.map((sub, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-mono text-slate-600">{sub.code}</td>
                      <td className="py-3 px-4 font-semibold">{sub.name}</td>
                      <td className="py-3 px-4 text-center">{sub.credits}</td>
                      <td className="py-3 px-4 text-center font-bold text-indigo-700">{sub.grade}</td>
                      <td className="py-3 px-4 text-center">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${sub.status === 'P' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                          {sub.status === 'P' ? 'PASS' : 'FAIL'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Performance Summary Banner */}
            <div className="p-6 bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-6">
                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold block">Semester SGPA</span>
                  <span className="text-2xl font-black text-amber-400">{resultData.sgpa}</span>
                </div>
                <div className="border-l border-slate-700 pl-6">
                  <span className="text-xs text-slate-400 uppercase font-semibold block">Cumulative CGPA</span>
                  <span className="text-2xl font-black text-blue-400">{resultData.cgpa}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-xs uppercase font-semibold text-slate-400">Overall Result Status:</span>
                <span className="bg-emerald-500 text-slate-950 font-black px-4 py-2 rounded-lg text-sm tracking-wide">
                  {resultData.status}
                </span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-xs border-t border-slate-800 print:hidden">
        <p>© 2026 SVPP / SVCE Examination Cell. All Rights Reserved.</p>
        <p className="text-slate-500 mt-1">Designed for B.Tech 2nd Year Results Verification.</p>
      </footer>
    </div>
  );
}