import React, { useState } from 'react';

const mockStudents = [
  {
    rollNo: "21SV1A0501",
    name: "Aarav Sharma",
    branch: "Computer Science & Engineering",
    semesters: {
      sem1: [
        { code: "CS201", name: "Data Structures", grade: "A", credits: 4 },
        { code: "CS202", name: "Discrete Math", grade: "O", credits: 3 },
        { code: "CS203", name: "Digital Logic Design", grade: "B", credits: 3 },
      ],
      sem2: [
        { code: "CS204", name: "Operating Systems", grade: "A+", credits: 4 },
        { code: "CS205", name: "Database Management", grade: "A", credits: 4 },
        { code: "CS206", name: "Java Programming", grade: "O", credits: 3 },
      ]
    }
  },
  {
    rollNo: "21SV1A0502",
    name: "Ananya Rao",
    branch: "Electronics & Communication",
    semesters: {
      sem1: [
        { code: "EC201", name: "Signals & Systems", grade: "B", credits: 4 },
        { code: "EC202", name: "Network Theory", grade: "F", credits: 3 },
        { code: "EC203", name: "Analog Circuits", grade: "C", credits: 3 },
      ],
      sem2: [
        { code: "EC204", name: "Control Systems", grade: "B+", credits: 4 },
        { code: "EC205", name: "Electromagnetics", grade: "A", credits: 4 },
        { code: "EC206", name: "Digital Signal Processing", grade: "B", credits: 3 },
      ]
    }
  }
];

const gradePoints = { O: 10, 'A+': 9, A: 8, 'B+': 7, B: 6, C: 5, F: 0 };

export default function App() {
  const [searchRoll, setSearchRoll] = useState('');
  const [currentStudent, setCurrentStudent] = useState(null);
  const [selectedSem, setSelectedSem] = useState('sem1');
  const [error, setError] = useState('');

  const handleSearch = () => {
    const student = mockStudents.find(
      (s) => s.rollNo.toUpperCase() === searchRoll.trim().toUpperCase()
    );
    if (student) {
      setCurrentStudent(student);
      setError('');
    } else {
      setCurrentStudent(null);
      setError('Student not found. Try searching: 21SV1A0501 or 21SV1A0502');
    }
  };

  const calculateSGPA = (subjects) => {
    let totalPoints = 0;
    let totalCredits = 0;
    subjects.forEach((sub) => {
      totalPoints += gradePoints[sub.grade] * sub.credits;
      totalCredits += sub.credits;
    });
    return (totalPoints / totalCredits).toFixed(2);
  };

  return (
    <div>
      <header className="header">
        <h1>SVPCET B.Tech Examination Portal</h1>
        <p>St. Vincent Pallotti College of Engineering & Technology — 2nd Year Results</p>
      </header>

      <div className="container">
        {/* Search Section */}
        <div className="search-card">
          <h3>Search Student Result</h3>
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter Roll Number (e.g. 21SV1A0501)"
              value={searchRoll}
              onChange={(e) => setSearchRoll(e.target.value)}
            />
            <button onClick={handleSearch}>View Results</button>
          </div>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </div>

        {/* Selected Student Result Display */}
        {currentStudent && (
          <div className="result-card">
            <div className="student-info">
              <div><span>Student Name</span><strong>{currentStudent.name}</strong></div>
              <div><span>Roll Number</span><strong>{currentStudent.rollNo}</strong></div>
              <div><span>Department</span><strong>{currentStudent.branch}</strong></div>
            </div>

            <div className="tabs">
              <button
                className={`tab-btn ${selectedSem === 'sem1' ? 'active' : ''}`}
                onClick={() => setSelectedSem('sem1')}
              >
                Semester 1
              </button>
              <button
                className={`tab-btn ${selectedSem === 'sem2' ? 'active' : ''}`}
                onClick={() => setSelectedSem('sem2')}
              >
                Semester 2
              </button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Subject Code</th>
                  <th>Subject Title</th>
                  <th>Credits</th>
                  <th>Grade</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {currentStudent.semesters[selectedSem].map((sub, idx) => (
                  <tr key={idx}>
                    <td>{sub.code}</td>
                    <td>{sub.name}</td>
                    <td>{sub.credits}</td>
                    <td>{sub.grade}</td>
                    <td>
                      <span className={sub.grade === 'F' ? 'badge-fail' : 'badge-pass'}>
                        {sub.grade === 'F' ? 'FAIL' : 'PASS'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="summary">
              <div>
                <strong>Overall Semester Result: </strong>
                {currentStudent.semesters[selectedSem].some((sub) => sub.grade === 'F') ? (
                  <span className="badge-fail">BACKLOG</span>
                ) : (
                  <span className="badge-pass">PASSED</span>
                )}
              </div>
              <div>
                <strong>SGPA: </strong>
                <span>{calculateSGPA(currentStudent.semesters[selectedSem])}</span>
              </div>
            </div>
          </div>
        )}

        {/* Directory List of All B.Tech 2nd Year Results */}
        <div className="search-card all-students">
          <h3>B.Tech 2nd Year — All Student Results</h3>
          <table>
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Branch</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mockStudents.map((s) => (
                <tr key={s.rollNo}>
                  <td>{s.rollNo}</td>
                  <td>{s.name}</td>
                  <td>{s.branch}</td>
                  <td>
                    <button
                      className="tab-btn"
                      onClick={() => {
                        setSearchRoll(s.rollNo);
                        setCurrentStudent(s);
                      }}
                    >
                      View Card
                    </button>
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