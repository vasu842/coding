import React, { useState } from 'react';

// Complete dataset extracted from document
const studentsData = [
  {
    rollNumber: "25G01A4301",
    name: "A B SURESH",
    sgpa: 4.03,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 22, external: 20, total: 42, cr: 0, gr: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 17, external: 32, total: 49, cr: 3, gr: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 16, external: 25, total: 41, cr: 3, gr: "E", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 23, external: 35, total: 58, cr: 3, gr: "D", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 16, external: 22, total: 38, cr: 0, gr: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 23, external: 43, total: 66, cr: 1, gr: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 18, external: 40, total: 58, cr: 1, gr: "D", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 25, external: 56, total: 81, cr: 1.5, gr: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: "AB", total: 15, cr: 0, gr: "-Ab-", result: "FAIL" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: "-", external: 77, total: 77, cr: 0.5, gr: "B", result: "PASS" }
    ]
  },
  {
    rollNumber: "25G01A4302",
    name: "A G JAMUNA",
    sgpa: 7.69,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 25, external: 43, total: 68, cr: 2, gr: "C", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 25, external: 41, total: 66, cr: 3, gr: "C", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 27, external: 45, total: 72, cr: 3, gr: "B", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 27, external: 47, total: 74, cr: 3, gr: "B", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 23, external: 35, total: 58, cr: 3, gr: "D", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 26, external: 59, total: 85, cr: 1, gr: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 27, external: 65, total: 92, cr: 1, gr: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 27, external: 60, total: 87, cr: 1.5, gr: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 25, external: 45, total: 70, cr: 1.5, gr: "B", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: "-", external: 85, total: 85, cr: 0.5, gr: "A", result: "PASS" }
    ]
  },
  {
    rollNumber: "25G01A4303",
    name: "AM DHANUSH",
    sgpa: 3.79,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 18, external: 16, total: 34, cr: 0, gr: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 19, external: 26, total: 45, cr: 3, gr: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 21, external: 36, total: 57, cr: 3, gr: "D", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 23, external: 18, total: 41, cr: 0, gr: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 20, external: 22, total: 42, cr: 0, gr: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 23, external: 38, total: 61, cr: 1, gr: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 17, external: 48, total: 65, cr: 1, gr: "C", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 25, external: 58, total: 83, cr: 1.5, gr: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 40, total: 55, cr: 1.5, gr: "D", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: "-", external: 85, total: 85, cr: 0.5, gr: "A", result: "PASS" }
    ]
  },
  {
    rollNumber: "25G01A4304",
    name: "AP YAMINI",
    sgpa: 7.69,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 28, external: 45, total: 73, cr: 2, gr: "B", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 26, external: 47, total: 73, cr: 3, gr: "B", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 20, external: 36, total: 56, cr: 3, gr: "D", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 29, external: 36, total: 65, cr: 3, gr: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 25, external: 35, total: 60, cr: 3, gr: "C", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 26, external: 63, total: 89, cr: 1, gr: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 27, external: 62, total: 89, cr: 1, gr: "A", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 28, external: 66, total: 94, cr: 1.5, gr: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 23, external: 48, total: 71, cr: 1.5, gr: "B", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: "-", external: 98, total: 98, cr: 0.5, gr: "S", result: "PASS" }
    ]
  },
  {
    rollNumber: "25G01A4307",
    name: "AAVULA DHARANI YADAV",
    sgpa: 8.85,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 27, external: 56, total: 83, cr: 2, gr: "A", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 27, external: 57, total: 84, cr: 3, gr: "A", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 27, external: 61, total: 88, cr: 3, gr: "A", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 28, external: 51, total: 79, cr: 3, gr: "B", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 28, external: 46, total: 74, cr: 3, gr: "B", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 27, external: 59, total: 86, cr: 1, gr: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 27, external: 67, total: 94, cr: 1, gr: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 28, external: 68, total: 96, cr: 1.5, gr: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 22, external: 62, total: 84, cr: 1.5, gr: "A", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: "-", external: 98, total: 98, cr: 0.5, gr: "S", result: "PASS" }
    ]
  },
  {
    rollNumber: "25G01A4326",
    name: "CS PRAVALIKA",
    sgpa: 9.13,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 29, external: 56, total: 85, cr: 2, gr: "A", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 28, external: 47, total: 75, cr: 3, gr: "B", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 30, external: 70, total: 100, cr: 3, gr: "S", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 29, external: 42, total: 71, cr: 3, gr: "B", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 30, external: 55, total: 85, cr: 3, gr: "A", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 28, external: 65, total: 93, cr: 1, gr: "S", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 29, external: 64, total: 93, cr: 1, gr: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 29, external: 67, total: 96, cr: 1.5, gr: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 21, external: 70, total: 91, cr: 1.5, gr: "S", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: "-", external: 92, total: 92, cr: 0.5, gr: "S", result: "PASS" }
    ]
  },
  {
    rollNumber: "25G01A4342",
    name: "E RUSHITHA",
    sgpa: 9.28,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 28, external: 55, total: 83, cr: 2, gr: "A", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 29, external: 58, total: 87, cr: 3, gr: "A", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 29, external: 64, total: 93, cr: 3, gr: "S", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 30, external: 44, total: 74, cr: 3, gr: "B", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 30, external: 52, total: 82, cr: 3, gr: "A", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 28, external: 66, total: 94, cr: 1, gr: "S", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 30, external: 70, total: 100, cr: 1, gr: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 29, external: 66, total: 95, cr: 1.5, gr: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 29, external: 70, total: 99, cr: 1.5, gr: "S", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: "-", external: 98, total: 98, cr: 0.5, gr: "S", result: "PASS" }
    ]
  }
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentStudent = studentsData[currentIndex];

  const handleNext = () => {
    if (currentIndex < studentsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSelect = (e) => {
    setCurrentIndex(Number(e.target.value));
  };

  return (
    <div className="portal-container">
      <div className="header">
        <h1>Sri Venkatesa Perumal College of Engineering & Technology</h1>
        <h2>B.TECH (ARTIFICIAL INTELLIGENCE) I SEM REGULAR EXAMINATIONS RESULTS PORTAL</h2>
      </div>

      <div className="navigation-controls">
        <button className="nav-btn" onClick={handlePrev} disabled={currentIndex === 0}>
          &laquo; Previous
        </button>

        <select className="search-select" value={currentIndex} onChange={handleSelect}>
          {studentsData.map((student, idx) => (
            <option key={student.rollNumber} value={idx}>
              {student.rollNumber} - {student.name}
            </option>
          ))}
        </select>

        <button className="nav-btn" onClick={handleNext} disabled={currentIndex === studentsData.length - 1}>
          Next &raquo;
        </button>
      </div>

      <div className="student-info">
        <p><strong>Roll Number:</strong> {currentStudent.rollNumber}</p>
        <p><strong>Student Name:</strong> {currentStudent.name}</p>
        <p><strong>SGPA:</strong> {currentStudent.sgpa}</p>
      </div>

      <table className="results-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Sub Code</th>
            <th>Subject Name</th>
            <th>Internal</th>
            <th>External</th>
            <th>Total</th>
            <th>Credits</th>
            <th>Grade</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {currentStudent.subjects.map((sub, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{sub.code}</td>
              <td style={{ textAlign: 'left' }}>{sub.name}</td>
              <td>{sub.internal}</td>
              <td>{sub.external}</td>
              <td>{sub.total}</td>
              <td>{sub.cr}</td>
              <td>{sub.gr}</td>
              <td className={sub.result === 'PASS' ? 'status-pass' : 'status-fail'}>
                {sub.result}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="summary-card">
        <span>Student Record {currentIndex + 1} of {studentsData.length}</span>
        <span>SGPA: {currentStudent.sgpa}</span>
      </div>
    </div>
  );
}