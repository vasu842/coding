const { useState } = React;

// Student Database containing R23 I-Sem and R20 II-Year records
const STUDENT_DATABASE = {
  "25G01A4301": {
    rollNumber: "25G01A4301",
    name: "A B SURESH",
    branch: "Artificial Intelligence (AI)",
    yearSem: "B.Tech I Year - I Semester",
    regulation: "R23",
    college: "Sri Venkatesa Perumal College of Engineering & Technology (AUTONOMOUS)",
    status: "FAILED",
    sgpa: 4.03,
    cgpa: 4.03,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 22, external: 20, total: 42, credits: 0, grade: "F", status: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 17, external: 32, total: 49, credits: 3, grade: "E", status: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 16, external: 25, total: 41, credits: 3, grade: "E", status: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 23, external: 35, total: 58, credits: 3, grade: "D", status: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 16, external: 22, total: 38, credits: 0, grade: "F", status: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 23, external: 43, total: 66, credits: 1, grade: "C", status: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 18, external: 40, total: 58, credits: 1, grade: "D", status: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 25, external: 56, total: 81, credits: 1.5, grade: "A", status: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: "AB", total: 15, credits: 0, grade: "-Ab-", status: "FAIL" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: "-", external: 77, total: 77, credits: 0.5, grade: "B", status: "PASS" }
    ]
  },
  "25G01A4302": {
    rollNumber: "25G01A4302",
    name: "A G JAMUNA",
    branch: "Artificial Intelligence (AI)",
    yearSem: "B.Tech I Year - I Semester",
    regulation: "R23",
    college: "Sri Venkatesa Perumal College of Engineering & Technology (AUTONOMOUS)",
    status: "PASSED",
    sgpa: 7.69,
    cgpa: 7.69,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 25, external: 43, total: 68, credits: 2, grade: "C", status: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 25, external: 41, total: 66, credits: 3, grade: "C", status: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 27, external: 45, total: 72, credits: 3, grade: "B", status: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 27, external: 47, total: 74, credits: 3, grade: "B", status: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 23, external: 35, total: 58, credits: 3, grade: "D", status: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 26, external: 59, total: 85, credits: 1, grade: "A", status: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 27, external: 65, total: 92, credits: 1, grade: "S", status: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 27, external: 60, total: 87, credits: 1.5, grade: "A", status: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 25, external: 45, total: 70, credits: 1.5, grade: "B", status: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: "-", external: 85, total: 85, credits: 0.5, grade: "A", status: "PASS" }
    ]
  },
  "25G01A4307": {
    rollNumber: "25G01A4307",
    name: "AAVULA DHARANI YADAV",
    branch: "Artificial Intelligence (AI)",
    yearSem: "B.Tech I Year - I Semester",
    regulation: "R23",
    college: "Sri Venkatesa Perumal College of Engineering & Technology (AUTONOMOUS)",
    status: "PASSED",
    sgpa: 8.85,
    cgpa: 8.85,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 27, external: 56, total: 83, credits: 2, grade: "A", status: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 27, external: 57, total: 84, credits: 3, grade: "A", status: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 27, external: 61, total: 88, credits: 3, grade: "A", status: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 28, external: 51, total: 79, credits: 3, grade: "B", status: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 28, external: 46, total: 74, credits: 3, grade: "B", status: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 27, external: 59, total: 86, credits: 1, grade: "A", status: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 27, external: 67, total: 94, credits: 1, grade: "S", status: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 28, external: 68, total: 96, credits: 1.5, grade: "S", status: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 22, external: 62, total: 84, credits: 1.5, grade: "A", status: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: "-", external: 98, total: 98, credits: 0.5, grade: "S", status: "PASS" }
    ]
  },
  "25G01A4326": {
    rollNumber: "25G01A4326",
    name: "C S PRAVALIKA",
    branch: "Artificial Intelligence (AI)",
    yearSem: "B.Tech I Year - I Semester",
    regulation: "R23",
    college: "Sri Venkatesa Perumal College of Engineering & Technology (AUTONOMOUS)",
    status: "PASSED",
    sgpa: 9.13,
    cgpa: 9.13,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 29, external: 56, total: 85, credits: 2, grade: "A", status: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 28, external: 47, total: 75, credits: 3, grade: "B", status: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 30, external: 70, total: 100, credits: 3, grade: "S", status: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 29, external: 42, total: 71, credits: 3, grade: "B", status: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 30, external: 55, total: 85, credits: 3, grade: "A", status: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 28, external: 65, total: 93, credits: 1, grade: "S", status: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 29, external: 64, total: 93, credits: 1, grade: "S", status: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 29, external: 67, total: 96, credits: 1.5, grade: "S", status: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 21, external: 70, total: 91, credits: 1.5, grade: "S", status: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: "-", external: 92, total: 92, credits: 0.5, grade: "S", status: "PASS" }
    ]
  },
  "22G01A0501": {
    rollNumber: "22G01A0501",
    name: "K. RAHUL SHARMA",
    branch: "Computer Science & Engineering (CSE)",
    yearSem: "B.Tech II Year - I Semester",
    regulation: "R20",
    college: "Sri Venkatesa Perumal College of Engineering & Technology (AUTONOMOUS)",
    status: "PASSED",
    sgpa: 8.45,
    cgpa: 8.21,
    subjects: [
      { code: "20A05301T", name: "Discrete Mathematics", internal: 28, external: 52, total: 80, credits: 3, grade: "A+", status: "PASS" },
      { code: "20A05302T", name: "Data Structures & Algorithms", internal: 26, external: 48, total: 74, credits: 3, grade: "A", status: "PASS" },
      { code: "20A05303T", name: "Object Oriented Programming (Java)", internal: 29, external: 62, total: 91, credits: 3, grade: "O", status: "PASS" },
      { code: "20A05304T", name: "Computer Organization", internal: 24, external: 44, total: 68, credits: 3, grade: "B+", status: "PASS" },
      { code: "20A05305P", name: "Data Structures Lab", internal: 29, external: 65, total: 94, credits: 1.5, grade: "O", status: "PASS" },
      { code: "20A05306P", name: "Java Programming Lab", internal: 28, external: 60, total: 88, credits: 1.5, grade: "A+", status: "PASS" },
      { code: "20A52301", name: "Universal Human Values", internal: 25, external: 50, total: 75, credits: 2, grade: "A", status: "PASS" }
    ]
  }
};

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [selectedSem, setSelectedSem] = useState('1-1');
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
      setErrorMsg(`No examination records found for Roll Number: "${cleanRoll}".`);
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
      <header className="bg-gradient-to-r from-blue-950 via-indigo-900 to-slate-900 text-white shadow-xl print:hidden">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-white text-blue-950 rounded-full flex items-center justify-center font-black text-2xl shadow-inner border-2 border-amber-400">
              SV
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-wide">SVPCET AUTONOMOUS</h1>
              <p className="text-xs text-blue-200 mt-0.5">Sri Venkatesa Perumal College of Engineering & Technology</p>
            </div>
          </div>
          <div className="bg-blue-900/60 border border-blue-700/50 rounded-xl px-4 py-2 text-center md:text-right">
            <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider block">Examination Branch</span>
            <span className="text-sm font-bold text-white">B.Tech Results Portal</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 py-8">
        {/* Search Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8 print:hidden">
          <h2 className="text-lg font-bold text-slate-800 mb-1">Check Examination Results</h2>
          <p className="text-xs text-slate-500 mb-6">Select your semester and enter your 10-digit Hall Ticket Number to fetch marks memo.</p>

          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Select Semester / Regulation</label>
              <select
                value={selectedSem}
                onChange={(e) => setSelectedSem(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="1-1">B.Tech I Year I Sem (R23 Regular)</option>
                <option value="2-1">B.Tech II Year I Sem (R20 Regular/Supply)</option>
                <option value="2-2">B.Tech II Year II Sem (R20 Regular/Supply)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Hall Ticket / Roll Number</label>
              <input
                type="text"
                placeholder="e.g. 25G01A4302 or 22G01A0501"
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

          {/* Quick Sample Links */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold">Sample Roll Numbers:</span>
            <button onClick={() => setSearchInput("25G01A4302")} className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-mono hover:underline">25G01A4302 (R23 AI - Pass)</button>
            <button onClick={() => setSearchInput("25G01A4307")} className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-mono hover:underline">25G01A4307 (R23 AI - 8.85 SGPA)</button>
            <button onClick={() => setSearchInput("25G01A4326")} className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-mono hover:underline">25G01A4326 (R23 AI - 9.13 SGPA)</button>
            <button onClick={() => setSearchInput("22G01A0501")} className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-mono hover:underline">22G01A0501 (R20 CSE 2nd Yr)</button>
          </div>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-xl mb-8 flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-3">
              <span className="text-rose-600 font-bold text-lg">⚠️</span>
              <p className="text-sm font-semibold text-rose-800">{errorMsg}</p>
            </div>
          </div>
        )}

        {/* Marks Memo View */}
        {resultData && (
          <div className="bg-white rounded-2xl shadow-md border border-slate-300 overflow-hidden print:shadow-none print:border-none">
            {/* Memo Header */}
            <div className="bg-slate-900 text-white p-6 border-b-4 border-amber-400">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl md:text-2xl font-black tracking-tight">{resultData.college}</h2>
                  <p className="text-xs text-slate-300 mt-1 uppercase font-semibold tracking-wider">Official Grade Report & Statement of Marks</p>
                </div>
                <button
                  onClick={() => window.print()}
                  className="print:hidden bg-amber-400 hover:bg-amber-500 text-slate-950 px-4 py-2 rounded-lg font-bold text-xs shadow-sm transition flex items-center gap-1.5"
                >
                  <span>🖨️</span> Print Marks Memo
                </button>
              </div>
            </div>

            {/* Student Information Section */}
            <div className="p-6 bg-slate-50/60 border-b border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-sm">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Student Name:</span>
                  <span className="font-bold text-slate-900">{resultData.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Roll Number / HT No:</span>
                  <span className="font-mono font-bold text-blue-700">{resultData.rollNumber}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Branch / Course:</span>
                  <span className="font-semibold text-slate-800">{resultData.branch}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Semester / Regulation:</span>
                  <span className="font-semibold text-slate-800">{resultData.yearSem} ({resultData.regulation})</span>
                </div>
              </div>
            </div>

            {/* Marks Table */}
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 uppercase font-bold border-b-2 border-slate-300">
                    <th className="py-3 px-3">Subject Code</th>
                    <th className="py-3 px-3">Subject Title</th>
                    <th className="py-3 px-3 text-center">Internal</th>
                    <th className="py-3 px-3 text-center">External</th>
                    <th className="py-3 px-3 text-center">Total</th>
                    <th className="py-3 px-3 text-center">Credits</th>
                    <th className="py-3 px-3 text-center">Grade</th>
                    <th className="py-3 px-3 text-center">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium text-slate-800">
                  {resultData.subjects.map((sub, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="py-3 px-3 font-mono text-slate-600">{sub.code}</td>
                      <td className="py-3 px-3 font-semibold">{sub.name}</td>
                      <td className="py-3 px-3 text-center text-slate-600">{sub.internal}</td>
                      <td className="py-3 px-3 text-center text-slate-600">{sub.external}</td>
                      <td className="py-3 px-3 text-center font-bold">{sub.total}</td>
                      <td className="py-3 px-3 text-center">{sub.credits}</td>
                      <td className="py-3 px-3 text-center font-bold text-indigo-700">{sub.grade}</td>
                      <td className="py-3 px-3 text-center">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${sub.status === 'PASS' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                          {sub.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Overall Summary Bar */}
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
                <span className="text-xs uppercase font-semibold text-slate-400">Result Status:</span>
                <span className={`font-black px-4 py-2 rounded-lg text-sm tracking-wide ${resultData.status === 'PASSED' ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white'}`}>
                  {resultData.status}
                </span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-xs border-t border-slate-800 print:hidden">
        <p>© 2026 Sri Venkatesa Perumal College of Engineering & Technology (SVPCET) Autonomous. All Rights Reserved.</p>
      </footer>
    </div>
  );
}