import React, { useState, useMemo } from 'react';

// Dataset compiled from B.Tech AI Examination Results PDF
const STUDENTS_DATA = [
  {
    htNo: "25G01A4301",
    name: "A B SURESH",
    branch: "ARTIFICIAL INTELLIGENCE",
    semesters: {
      sem1: {
        sgpa: 4.03,
        subjects: [
          { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 22, external: 20, total: 42, credits: 0, grade: "F", result: "FAIL" },
          { code: "23BS0005", name: "CHEMISTRY", internal: 17, external: 32, total: 49, credits: 3, grade: "E", result: "PASS" },
          { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 16, external: 25, total: 41, credits: 3, grade: "E", result: "PASS" },
          { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 23, external: 35, total: 58, credits: 3, grade: "D", result: "PASS" },
          { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 16, external: 22, total: 38, credits: 0, grade: "F", result: "FAIL" },
          { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 23, external: 43, total: 66, credits: 1, grade: "C", result: "PASS" },
          { code: "23LC0004", name: "CHEMISTRY LAB", internal: 18, external: 40, total: 58, credits: 1, grade: "D", result: "PASS" },
          { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 25, external: 56, total: 81, credits: 1.5, grade: "A", result: "PASS" },
          { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: "AB", total: 15, credits: 0, grade: "-Ab-", result: "FAIL" },
          { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: "-", external: 77, total: 77, credits: 0.5, grade: "B", result: "PASS" }
        ]
      },
      sem2: { sgpa: null, subjects: [] }
    }
  },
  {
    htNo: "25G01A4302",
    name: "A G JAMUNA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semesters: {
      sem1: {
        sgpa: 7.69,
        subjects: [
          { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 25, external: 43, total: 68, credits: 2, grade: "C", result: "PASS" },
          { code: "23BS0005", name: "CHEMISTRY", internal: 25, external: 41, total: 66, credits: 3, grade: "C", result: "PASS" },
          { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 27, external: 45, total: 72, credits: 3, grade: "B", result: "PASS" },
          { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 27, external: 47, total: 74, credits: 3, grade: "B", result: "PASS" },
          { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 23, external: 35, total: 58, credits: 3, grade: "D", result: "PASS" },
          { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 26, external: 59, total: 85, credits: 1, grade: "A", result: "PASS" },
          { code: "23LC0004", name: "CHEMISTRY LAB", internal: 27, external: 65, total: 92, credits: 1, grade: "S", result: "PASS" },
          { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 27, external: 60, total: 87, credits: 1.5, grade: "A", result: "PASS" },
          { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 25, external: 45, total: 70, credits: 1.5, grade: "B", result: "PASS" },
          { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: "-", external: 85, total: 85, credits: 0.5, grade: "A", result: "PASS" }
        ]
      },
      sem2: { sgpa: null, subjects: [] }
    }
  },
  {
    htNo: "25G01A4304",
    name: "A P YAMINI",
    branch: "ARTIFICIAL INTELLIGENCE",
    semesters: {
      sem1: {
        sgpa: 7.69,
        subjects: [
          { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 28, external: 45, total: 73, credits: 2, grade: "B", result: "PASS" },
          { code: "23BS0005", name: "CHEMISTRY", internal: 26, external: 47, total: 73, credits: 3, grade: "B", result: "PASS" },
          { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 20, external: 36, total: 56, credits: 3, grade: "D", result: "PASS" },
          { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 29, external: 36, total: 65, credits: 3, grade: "C", result: "PASS" },
          { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 25, external: 35, total: 60, credits: 3, grade: "C", result: "PASS" },
          { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 26, external: 63, total: 89, credits: 1, grade: "A", result: "PASS" },
          { code: "23LC0004", name: "CHEMISTRY LAB", internal: 27, external: 62, total: 89, credits: 1, grade: "A", result: "PASS" },
          { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 28, external: 66, total: 94, credits: 1.5, grade: "S", result: "PASS" },
          { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 23, external: 48, total: 71, credits: 1.5, grade: "B", result: "PASS" },
          { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: "-", external: 98, total: 98, credits: 0.5, grade: "S", result: "PASS" }
        ]
      },
      sem2: { sgpa: null, subjects: [] }
    }
  },
  {
    htNo: "25G01A4307",
    name: "AAVULA DHARANI YADAV",
    branch: "ARTIFICIAL INTELLIGENCE",
    semesters: {
      sem1: {
        sgpa: 8.85,
        subjects: [
          { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 27, external: 56, total: 83, credits: 2, grade: "A", result: "PASS" },
          { code: "23BS0005", name: "CHEMISTRY", internal: 27, external: 57, total: 84, credits: 3, grade: "A", result: "PASS" },
          { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 27, external: 61, total: 88, credits: 3, grade: "A", result: "PASS" },
          { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 28, external: 51, total: 79, credits: 3, grade: "B", result: "PASS" },
          { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 28, external: 46, total: 74, credits: 3, grade: "B", result: "PASS" },
          { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 27, external: 59, total: 86, credits: 1, grade: "A", result: "PASS" },
          { code: "23LC0004", name: "CHEMISTRY LAB", internal: 27, external: 67, total: 94, credits: 1, grade: "S", result: "PASS" },
          { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 28, external: 68, total: 96, credits: 1.5, grade: "S", result: "PASS" },
          { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 22, external: 62, total: 84, credits: 1.5, grade: "A", result: "PASS" },
          { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: "-", external: 98, total: 98, credits: 0.5, grade: "S", result: "PASS" }
        ]
      },
      sem2: { sgpa: null, subjects: [] }
    }
  },
  {
    htNo: "25G01A4326",
    name: "C S PRAVALIKA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semesters: {
      sem1: {
        sgpa: 9.13,
        subjects: [
          { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 29, external: 56, total: 85, credits: 2, grade: "A", result: "PASS" },
          { code: "23BS0005", name: "CHEMISTRY", internal: 28, external: 47, total: 75, credits: 3, grade: "B", result: "PASS" },
          { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 30, external: 70, total: 100, credits: 3, grade: "S", result: "PASS" },
          { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 29, external: 42, total: 71, credits: 3, grade: "B", result: "PASS" },
          { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 30, external: 55, total: 85, credits: 3, grade: "A", result: "PASS" },
          { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 28, external: 65, total: 93, credits: 1, grade: "S", result: "PASS" },
          { code: "23LC0004", name: "CHEMISTRY LAB", internal: 29, external: 64, total: 93, credits: 1, grade: "S", result: "PASS" },
          { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 29, external: 67, total: 96, credits: 1.5, grade: "S", result: "PASS" },
          { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 21, external: 70, total: 91, credits: 1.5, grade: "S", result: "PASS" },
          { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: "-", external: 92, total: 92, credits: 0.5, grade: "S", result: "PASS" }
        ]
      },
      sem2: { sgpa: null, subjects: [] }
    }
  },
  {
    htNo: "25G01A4342",
    name: "E RUSHITHA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semesters: {
      sem1: {
        sgpa: 9.28,
        subjects: [
          { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 28, external: 55, total: 83, credits: 2, grade: "A", result: "PASS" },
          { code: "23BS0005", name: "CHEMISTRY", internal: 29, external: 58, total: 87, credits: 3, grade: "A", result: "PASS" },
          { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 29, external: 64, total: 93, credits: 3, grade: "S", result: "PASS" },
          { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 30, external: 44, total: 74, credits: 3, grade: "B", result: "PASS" },
          { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 30, external: 52, total: 82, credits: 3, grade: "A", result: "PASS" },
          { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 28, external: 66, total: 94, credits: 1, grade: "S", result: "PASS" },
          { code: "23LC0004", name: "CHEMISTRY LAB", internal: 30, external: 70, total: 100, credits: 1, grade: "S", result: "PASS" },
          { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 29, external: 66, total: 95, credits: 1.5, grade: "S", result: "PASS" },
          { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 29, external: 70, total: 99, credits: 1.5, grade: "S", result: "PASS" },
          { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: "-", external: 98, total: 98, credits: 0.5, grade: "S", result: "PASS" }
        ]
      },
      sem2: { sgpa: null, subjects: [] }
    }
  }
];

export default function App() {
  const [selectedSem, setSelectedSem] = useState('sem1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Filter students based on search term (Hall Ticket No or Name)
  const filteredStudents = useMemo(() => {
    return STUDENTS_DATA.filter(s => 
      s.htNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Analytics Metrics
  const stats = useMemo(() => {
    const total = STUDENTS_DATA.length;
    let passed = 0;
    let totalSGPA = 0;

    STUDENTS_DATA.forEach(s => {
      const semData = s.semesters[selectedSem];
      if (semData && semData.sgpa) {
        totalSGPA += semData.sgpa;
        const allPass = semData.subjects.every(sub => sub.result === 'PASS');
        if (allPass) passed++;
      }
    });

    return {
      total,
      passed,
      failed: total - passed,
      avgSgpa: (totalSGPA / total).toFixed(2)
    };
  }, [selectedSem]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header Banner */}
      <header className="bg-sky-900 text-white shadow-lg no-print">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white p-2 rounded-full text-sky-900 font-bold text-xl">
              SVPCET
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-wide">
                Sri Venkatesa Perumal College of Engineering & Technology
              </h1>
              <p className="text-sky-200 text-sm">AUTONOMOUS - Affiliated to JNTUA, Ananthapuramu</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <span className="inline-block bg-sky-800 text-sky-100 text-xs px-3 py-1 rounded-full border border-sky-600">
              Examination Portal
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-8 flex-grow w-full">
        {/* Portal Controls */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 no-print">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Semester Switcher */}
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setSelectedSem('sem1')}
                className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${
                  selectedSem === 'sem1' 
                    ? 'bg-sky-600 text-white shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Semester I (Dec 25 / Jan 26)
              </button>
              <button
                onClick={() => setSelectedSem('sem2')}
                className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${
                  selectedSem === 'sem2' 
                    ? 'bg-sky-600 text-white shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Semester II (Upcoming)
              </button>
            </div>

            {/* Search Input */}
            <div className="w-full md:w-80">
              <input
                type="text"
                placeholder="Search Hall Ticket or Name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>
        </div>

        {/* Analytics Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 no-print">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Total Students</p>
            <p className="text-3xl font-bold text-slate-800 mt-2">{stats.total}</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
            <p className="text-xs uppercase tracking-wider text-emerald-600 font-semibold">All Subjects Passed</p>
            <p className="text-3xl font-bold text-emerald-600 mt-2">{stats.passed}</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
            <p className="text-xs uppercase tracking-wider text-rose-500 font-semibold">With Backlogs</p>
            <p className="text-3xl font-bold text-rose-500 mt-2">{stats.failed}</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
            <p className="text-xs uppercase tracking-wider text-sky-600 font-semibold">Average Class SGPA</p>
            <p className="text-3xl font-bold text-sky-600 mt-2">{stats.avgSgpa}</p>
          </div>
        </div>

        {/* View Mode: Selected Student Marksheet OR Student Directory */}
        {selectedStudent ? (
          /* Detailed Marksheet View */
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 md:p-8">
            <div className="flex justify-between items-center mb-6 no-print">
              <button
                onClick={() => setSelectedStudent(null)}
                className="text-sky-600 hover:text-sky-800 font-medium flex items-center gap-1 text-sm"
              >
                &larr; Back to Results Directory
              </button>
              <button
                onClick={() => window.print()}
                className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Print Grade Sheet
              </button>
            </div>

            {/* Print Header */}
            <div className="text-center pb-6 mb-6 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">SRI VENKATESA PERUMAL COLLEGE OF ENGINEERING & TECHNOLOGY</h2>
              <p className="text-xs text-slate-500">Autonomous - Affiliated to JNTUA, Ananthapuramu</p>
              <h3 className="text-md font-semibold text-sky-900 mt-2">
                STATEMENT OF GRADES - B.TECH ({selectedStudent.branch})
              </h3>
              <p className="text-xs text-slate-600 uppercase mt-1">
                {selectedSem === 'sem1' ? 'I Semester Regular Examinations (Dec 25 / Jan 26)' : 'II Semester Regular Examinations'}
              </p>
            </div>

            {/* Student Metadata Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-lg mb-6 text-sm">
              <div>
                <span className="text-slate-500">Student Name:</span>{' '}
                <strong className="text-slate-800">{selectedStudent.name}</strong>
              </div>
              <div>
                <span className="text-slate-500">Hall Ticket Number:</span>{' '}
                <strong className="text-slate-800">{selectedStudent.htNo}</strong>
              </div>
            </div>

            {/* Marksheet Grade Table */}
            {selectedStudent.semesters[selectedSem]?.subjects.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-slate-200 text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-3 border border-slate-200">Sub Code</th>
                      <th className="p-3 border border-slate-200">Subject Title</th>
                      <th className="p-3 border border-slate-200 text-center">Internal</th>
                      <th className="p-3 border border-slate-200 text-center">External</th>
                      <th className="p-3 border border-slate-200 text-center">Total</th>
                      <th className="p-3 border border-slate-200 text-center">Credits</th>
                      <th className="p-3 border border-slate-200 text-center">Grade</th>
                      <th className="p-3 border border-slate-200 text-center">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedStudent.semesters[selectedSem].subjects.map((sub, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 border-b border-slate-200">
                        <td className="p-3 border border-slate-200 font-mono text-xs">{sub.code}</td>
                        <td className="p-3 border border-slate-200 font-medium">{sub.name}</td>
                        <td className="p-3 border border-slate-200 text-center">{sub.internal}</td>
                        <td className="p-3 border border-slate-200 text-center">{sub.external}</td>
                        <td className="p-3 border border-slate-200 text-center font-semibold">{sub.total}</td>
                        <td className="p-3 border border-slate-200 text-center">{sub.credits}</td>
                        <td className="p-3 border border-slate-200 text-center font-bold">{sub.grade}</td>
                        <td className="p-3 border border-slate-200 text-center">
                          <span
                            className={`px-2 py-1 rounded text-xs font-semibold ${
                              sub.result === 'PASS'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {sub.result}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="mt-6 flex justify-between items-center bg-sky-50 p-4 rounded-lg border border-sky-100">
                  <span className="text-sm font-semibold text-sky-900">Semester Grade Point Average (SGPA):</span>
                  <span className="text-xl font-bold text-sky-900">
                    {selectedStudent.semesters[selectedSem].sgpa || 'N/A'}
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500">
                Semester II results have not been published yet.
              </div>
            )}
          </div>
        ) : (
          /* Student Directory List */
          <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
            <div className="p-4 bg-slate-100 border-b border-slate-200 flex justify-between items-center">
              <h2 className="font-semibold text-slate-700">Student Results Directory</h2>
              <span className="text-xs text-slate-500">{filteredStudents.length} Students Listed</span>
            </div>
            
            <div className="divide-y divide-slate-200">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => {
                  const sem = student.semesters[selectedSem];
                  const isPass = sem?.subjects?.every(s => s.result === 'PASS');

                  return (
                    <div
                      key={student.htNo}
                      onClick={() => setSelectedStudent(student)}
                      className="p-4 hover:bg-slate-50 cursor-pointer transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs bg-slate-200 text-slate-800 px-2 py-0.5 rounded">
                            {student.htNo}
                          </span>
                          <h3 className="font-semibold text-slate-800">{student.name}</h3>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Branch: {student.branch}</p>
                      </div>

                      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                        {sem?.sgpa !== null ? (
                          <>
                            <div className="text-right">
                              <span className="text-xs text-slate-500 block">SGPA</span>
                              <span className="font-bold text-slate-700">{sem.sgpa}</span>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              isPass ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                            }`}>
                              {isPass ? 'PASSED' : 'FAILED / BACKLOG'}
                            </span>
                          </>
                        ) : (
                          <span className="text-xs text-slate-400">Results Pending</span>
                        )}
                        <span className="text-slate-400 hover:text-slate-600">&rarr;</span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12 text-slate-500">
                  No student records matched your search term.
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-400 py-6 text-center text-xs border-t border-slate-700 no-print">
        <p>&copy; 2026 Sri Venkatesa Perumal College of Engineering & Technology. All rights reserved.</p>
        <p className="mt-1 text-slate-500">Controller of Examinations Portal</p>
      </footer>
    </div>
  );
}