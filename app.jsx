import React, { useState } from 'react';

// Dataset populated from SVPCET B.Tech II Sem (R23) Regular Exams Results June 2026
const studentsData = [
  {
    pin: "25G01A4301",
    name: "A B SURESH",
    sgpa: "4.95",
    subjects: [
      { code: "23BS0002", name: "ENGINEERING PHYSICS", internal: 15, external: 28, total: 43, cr: 3, gr: "E", result: "PASS" },
      { code: "23BS0004", name: "DIFFERENTIAL EQUATIONS & VECTOR CALCULUS", internal: 18, external: 25, total: 43, cr: 3, gr: "E", result: "PASS" },
      { code: "23ES0201", name: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING", internal: 17, external: 25, total: 42, cr: 3, gr: "E", result: "PASS" },
      { code: "23ES0301", name: "ENGINEERING GRAPHICS", internal: 15, external: 0, total: 15, cr: 0, gr: "F", result: "FAIL" },
      { code: "23LC0502", name: "IT WORKSHOP", internal: 23, external: 57, total: 80, cr: 1, gr: "A", result: "PASS" },
      { code: "23PC0501", name: "DATA STRUCTURES", internal: 19, external: 26, total: 45, cr: 3, gr: "E", result: "PASS" },
      { code: "23LC0002", name: "ENGINEERING PHYSICS LAB", internal: 15, external: 39, total: 54, cr: 1, gr: "D", result: "PASS" },
      { code: "23LC0201", name: "ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP", internal: 24, external: 50, total: 74, cr: 1.5, gr: "B", result: "PASS" },
      { code: "23LC0503", name: "DATA STRUCTURES LAB", internal: 15, external: 54, cr: 69, cr: 1.5, gr: "C", result: "PASS" },
      { code: "23HM0003", name: "NSS/NCC/SCOUTS & GUIDES/COMMUNITY SERVICE", internal: "-", external: 78, total: 78, cr: 0.5, gr: "B", result: "PASS" }
    ]
  },
  {
    pin: "25G01A4302",
    name: "A G JAMUNA",
    sgpa: "7.59",
    subjects: [
      { code: "23BS0002", name: "ENGINEERING PHYSICS", internal: 26, external: 41, total: 67, cr: 3, gr: "C", result: "PASS" },
      { code: "23BS0004", name: "DIFFERENTIAL EQUATIONS & VECTOR CALCULUS", internal: 26, external: 28, total: 54, cr: 3, gr: "D", result: "PASS" },
      { code: "23ES0201", name: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING", internal: 20, external: 47, total: 67, cr: 3, gr: "C", result: "PASS" },
      { code: "23ES0301", name: "ENGINEERING GRAPHICS", internal: 28, external: 51, total: 79, cr: 3, gr: "B", result: "PASS" },
      { code: "23LC0502", name: "IT WORKSHOP", internal: 25, external: 64, total: 89, cr: 1, gr: "A", result: "PASS" },
      { code: "23PC0501", name: "DATA STRUCTURES", internal: 22, external: 36, total: 58, cr: 3, gr: "D", result: "PASS" },
      { code: "23LC0002", name: "ENGINEERING PHYSICS LAB", internal: 28, external: 65, total: 93, cr: 1, gr: "S", result: "PASS" },
      { code: "23LC0201", name: "ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP", internal: 28, external: 68, total: 96, cr: 1.5, gr: "S", result: "PASS" },
      { code: "23LC0503", name: "DATA STRUCTURES LAB", internal: 27, external: 64, total: 91, cr: 1.5, gr: "S", result: "PASS" },
      { code: "23HM0003", name: "NSS/NCC/SCOUTS & GUIDES/COMMUNITY SERVICE", internal: "-", external: 83, total: 83, cr: 0.5, gr: "A", result: "PASS" }
    ]
  },
  {
    pin: "25G01A4303",
    name: "A M DHANUSH",
    sgpa: "5.51",
    subjects: [
      { code: "23BS0002", name: "ENGINEERING PHYSICS", internal: 20, external: 14, total: 34, cr: 0, gr: "F", result: "FAIL" },
      { code: "23BS0004", name: "DIFFERENTIAL EQUATIONS & VECTOR CALCULUS", internal: 15, external: 25, total: 40, cr: 3, gr: "E", result: "PASS" },
      { code: "23ES0201", name: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING", internal: 15, external: 25, total: 40, cr: 3, gr: "E", result: "PASS" },
      { code: "23ES0301", name: "ENGINEERING GRAPHICS", internal: 19, external: 49, total: 68, cr: 3, gr: "C", result: "PASS" },
      { code: "23LC0502", name: "IT WORKSHOP", internal: 24, external: 62, total: 86, cr: 1, gr: "A", result: "PASS" },
      { code: "23PC0501", name: "DATA STRUCTURES", internal: 15, external: 26, total: 41, cr: 3, gr: "E", result: "PASS" },
      { code: "23LC0002", name: "ENGINEERING PHYSICS LAB", internal: 26, external: 34, total: 60, cr: 1, gr: "C", result: "PASS" },
      { code: "23LC0201", name: "ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP", internal: 26, external: 55, total: 81, cr: 1.5, gr: "A", result: "PASS" },
      { code: "23LC0503", name: "DATA STRUCTURES LAB", internal: 23, external: 61, total: 84, cr: 1.5, gr: "A", result: "PASS" },
      { code: "23HM0003", name: "NSS/NCC/SCOUTS & GUIDES/COMMUNITY SERVICE", internal: "-", external: 75, total: 75, cr: 0.5, gr: "B", result: "PASS" }
    ]
  },
  {
    pin: "25G01A4304",
    name: "A P YAMINI",
    sgpa: "7.46",
    subjects: [
      { code: "23BS0002", name: "ENGINEERING PHYSICS", internal: 27, external: 40, total: 67, cr: 3, gr: "C", result: "PASS" },
      { code: "23BS0004", name: "DIFFERENTIAL EQUATIONS & VECTOR CALCULUS", internal: 26, external: 28, total: 54, cr: 3, gr: "D", result: "PASS" },
      { code: "23ES0201", name: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING", internal: 20, external: 38, total: 58, cr: 3, gr: "D", result: "PASS" },
      { code: "23ES0301", name: "ENGINEERING GRAPHICS", internal: 26, external: 46, total: 72, cr: 3, gr: "B", result: "PASS" },
      { code: "23LC0502", name: "IT WORKSHOP", internal: 27, external: 59, total: 86, cr: 1, gr: "A", result: "PASS" },
      { code: "23PC0501", name: "DATA STRUCTURES", internal: 24, external: 42, total: 66, cr: 3, gr: "C", result: "PASS" },
      { code: "23LC0002", name: "ENGINEERING PHYSICS LAB", internal: 29, external: 61, total: 90, cr: 1, gr: "S", result: "PASS" },
      { code: "23LC0201", name: "ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP", internal: 30, external: 68, total: 98, cr: 1.5, gr: "S", result: "PASS" },
      { code: "23LC0503", name: "DATA STRUCTURES LAB", internal: 27, external: 50, total: 77, cr: 1.5, gr: "B", result: "PASS" },
      { code: "23HM0003", name: "NSS/NCC/SCOUTS & GUIDES/COMMUNITY SERVICE", internal: "-", external: 92, total: 92, cr: 0.5, gr: "S", result: "PASS" }
    ]
  },
  {
    pin: "25G01A4305",
    name: "A PREETHI",
    sgpa: "3.12",
    subjects: [
      { code: "23BS0002", name: "ENGINEERING PHYSICS", internal: 15, external: 7, total: 22, cr: 0, gr: "F", result: "FAIL" },
      { code: "23BS0004", name: "DIFFERENTIAL EQUATIONS & VECTOR CALCULUS", internal: 17, external: 12, total: 29, cr: 0, gr: "F", result: "FAIL" },
      { code: "23ES0201", name: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING", internal: 16, external: 8, total: 24, cr: 0, gr: "F", result: "FAIL" },
      { code: "23ES0301", name: "ENGINEERING GRAPHICS", internal: 15, external: 34, total: 49, cr: 3, gr: "E", result: "PASS" },
      { code: "23LC0502", name: "IT WORKSHOP", internal: 24, external: 59, total: 83, cr: 1, gr: "A", result: "PASS" },
      { code: "23PC0501", name: "DATA STRUCTURES", internal: 15, external: 12, total: 27, cr: 0, gr: "F", result: "FAIL" },
      { code: "23LC0002", name: "ENGINEERING PHYSICS LAB", internal: 26, external: 58, total: 84, cr: 1, gr: "A", result: "PASS" },
      { code: "23LC0201", name: "ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP", internal: 27, external: 64, total: 91, cr: 1.5, gr: "S", result: "PASS" },
      { code: "23LC0503", name: "DATA STRUCTURES LAB", internal: 15, external: 61, total: 76, cr: 1.5, gr: "B", result: "PASS" },
      { code: "23HM0003", name: "NSS/NCC/SCOUTS & GUIDES/COMMUNITY SERVICE", internal: "-", external: 78, total: 78, cr: 0.5, gr: "B", result: "PASS" }
    ]
  }
];

export default function App() {
  const [selectedStudentPin, setSelectedStudentPin] = useState(studentsData[0].pin);

  const selectedStudent = studentsData.find(s => s.pin === selectedStudentPin) || studentsData[0];

  // Helper functions for pass/fail counts
  const countPass = (subjects) => subjects.filter(s => s.result === 'PASS').length;
  const countFail = (subjects) => subjects.filter(s => s.result === 'FAIL').length;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 font-sans">
      {/* College Header */}
      <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md mb-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          SRI VENKATESA PERUMAL COLLEGE OF ENGINEERING & TECHNOLOGY
        </h1>
        <p className="text-sm md:text-base text-blue-200 mt-1">
          (AUTONOMOUS, Affiliated to JNTUA, Ananthapuramu)[cite: 13]
        </p>
        <p className="text-xs md:text-sm bg-blue-800 text-blue-100 inline-block px-3 py-1 rounded mt-2 font-medium">
          B.TECH (ARTIFICIAL INTELLIGENCE) II SEM REGULAR EXAMINATIONS JUN 2026[cite: 13]
        </p>
      </div>

      {/* Student Selector */}
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <label htmlFor="student-select" className="font-semibold text-gray-700 text-lg">
          Select Student PIN:
        </label>
        <select
          id="student-select"
          className="w-full md:w-auto bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 p-2.5 font-medium"
          value={selectedStudentPin}
          onChange={(e) => setSelectedStudentPin(e.target.value)}
        >
          {studentsData.map((student) => (
            <option key={student.pin} value={student.pin}>
              {student.pin} - {student.name}
            </option>
          ))}
        </select>
      </div>

      {/* Student Details Summary Card */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-800">
          <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0">
            <span className="text-xs text-gray-500 uppercase font-bold block">PIN / Roll No</span>
            <span className="text-xl font-bold text-blue-900">{selectedStudent.pin}</span>
          </div>
          <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0">
            <span className="text-xs text-gray-500 uppercase font-bold block">Student Name</span>
            <span className="text-xl font-bold text-gray-800">{selectedStudent.name}</span>
          </div>
          <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0">
            <span className="text-xs text-gray-500 uppercase font-bold block">Overall SGPA</span>
            <span className="text-xl font-bold text-emerald-600">{selectedStudent.sgpa}</span>
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase font-bold block">Status Summary</span>
            <div className="flex gap-2 mt-1">
              <span className="bg-green-100 text-green-800 font-bold px-2.5 py-0.5 rounded text-sm">
                Pass: {countPass(selectedStudent.subjects)}
              </span>
              <span className="bg-red-100 text-red-800 font-bold px-2.5 py-0.5 rounded text-sm">
                Fail: {countFail(selectedStudent.subjects)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Marks Table */}
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-800">Subject-wise Result Breakdown</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b border-gray-200">
              <tr>
                <th scope="col" className="px-4 py-3">S.No</th>
                <th scope="col" className="px-4 py-3">Code</th>
                <th scope="col" className="px-6 py-3">Subject Name</th>
                <th scope="col" className="px-4 py-3 text-center">Internal</th>
                <th scope="col" className="px-4 py-3 text-center">External</th>
                <th scope="col" className="px-4 py-3 text-center">Total</th>
                <th scope="col" className="px-4 py-3 text-center">Credits</th>
                <th scope="col" className="px-4 py-3 text-center">Grade</th>
                <th scope="col" className="px-4 py-3 text-center">Result</th>
              </tr>
            </thead>
            <tbody>
              {selectedStudent.subjects.map((sub, idx) => (
                <tr key={sub.code} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{idx + 1}</td>
                  <td className="px-4 py-3 font-mono font-semibold text-gray-600">{sub.code}</td>
                  <td className="px-6 py-3 font-semibold text-gray-800">{sub.name}</td>
                  <td className="px-4 py-3 text-center">{sub.internal}</td>
                  <td className="px-4 py-3 text-center">{sub.external}</td>
                  <td className="px-4 py-3 text-center font-bold text-gray-900">{sub.total}</td>
                  <td className="px-4 py-3 text-center">{sub.cr}</td>
                  <td className="px-4 py-3 text-center font-bold">{sub.gr}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-2.5 py-1 rounded text-xs font-bold ${
                        sub.result === 'PASS'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {sub.result}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}