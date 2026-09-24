const { useState } = React;

// Integrated SVPCET College Database
const COLLEGE_DATABASE = [
    {
        rollNumber: "25G01A4301",
        name: "A B SURESH",
        branch: "B.Tech (Artificial Intelligence)",
        results: {
            "sem1": {
                sgpa: 4.03,
                subjects: [
                    { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", int: 15, ext: "12", total: 27, cr: 2.0, grade: "F", status: "FAIL" },
                    { code: "23BS0005", name: "CHEMISTRY", int: 18, ext: "10", total: 28, cr: 3.0, grade: "F", status: "FAIL" },
                    { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", int: 20, ext: "35", total: 55, cr: 3.0, grade: "D", status: "PASS" }
                ]
            },
            "sem2": {
                sgpa: 6.50,
                subjects: [
                    { code: "23BS0002", name: "DIFFERENTIAL EQUATIONS", int: 22, ext: "40", total: 62, cr: 3.0, grade: "C", status: "PASS" },
                    { code: "23CS0001", name: "DATA STRUCTURES", int: 25, ext: "45", total: 70, cr: 3.0, grade: "B", status: "PASS" }
                ]
            }
        }
    },
    {
        rollNumber: "25G01A4302",
        name: "A G JAMUNA",
        branch: "B.Tech (Artificial Intelligence)",
        results: {
            "sem1": {
                sgpa: 7.69,
                subjects: [
                    { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", int: 25, ext: "43", total: 68, cr: 2.0, grade: "C", status: "PASS" },
                    { code: "23BS0005", name: "CHEMISTRY", int: 25, ext: "41", total: 66, cr: 3.0, grade: "C", status: "PASS" },
                    { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", int: 27, ext: "45", total: 72, cr: 3.0, grade: "B", status: "PASS" },
                    { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGG", int: 27, ext: "47", total: 74, cr: 3.0, grade: "B", status: "PASS" },
                    { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", int: 23, ext: "35", total: 58, cr: 3.0, grade: "D", status: "PASS" }
                ]
            },
            "sem2": {
                sgpa: 8.20,
                subjects: [
                    { code: "23BS0002", name: "DIFFERENTIAL EQUATIONS", int: 28, ext: "50", total: 78, cr: 3.0, grade: "A", status: "PASS" },
                    { code: "23CS0001", name: "DATA STRUCTURES", int: 27, ext: "52", total: 79, cr: 3.0, grade: "A", status: "PASS" }
                ]
            }
        }
    },
    {
        rollNumber: "25G01A4307",
        name: "AAVULA DHARANI YADAV",
        branch: "B.Tech (Artificial Intelligence)",
        results: {
            "sem1": {
                sgpa: 8.85,
                subjects: [
                    { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", int: 28, ext: "55", total: 83, cr: 2.0, grade: "A", status: "PASS" },
                    { code: "23BS0005", name: "CHEMISTRY", int: 29, ext: "58", total: 87, cr: 3.0, grade: "A", status: "PASS" },
                    { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", int: 30, ext: "60", total: 90, cr: 3.0, grade: "S", status: "PASS" }
                ]
            },
            "sem2": {
                sgpa: 9.10,
                subjects: [
                    { code: "23BS0002", name: "DIFFERENTIAL EQUATIONS", int: 30, ext: "62", total: 92, cr: 3.0, grade: "S", status: "PASS" },
                    { code: "23CS0001", name: "DATA STRUCTURES", int: 29, ext: "60", total: 89, cr: 3.0, grade: "A", status: "PASS" }
                ]
            }
        }
    }
];

function App() {
    const [activeTab, setActiveTab] = useState('search');
    const [searchRoll, setSearchRoll] = useState('');
    const [selectedSem, setSelectedSem] = useState('sem1');
    const [foundStudent, setFoundStudent] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    // Search function by Roll Number
    const handleSearch = (e) => {
        e.preventDefault();
        setErrorMsg('');
        setFoundStudent(null);

        const cleanRoll = searchRoll.trim().toUpperCase();
        if (!cleanRoll) {
            setErrorMsg('Please enter a valid Roll Number.');
            return;
        }

        const student = COLLEGE_DATABASE.find(s => s.rollNumber === cleanRoll);

        if (student) {
            setFoundStudent(student);
        } else {
            setErrorMsg(`No record found for Roll Number: ${cleanRoll}`);
        }
    };

    return (
        <div>
            {/* Header Portal Branding */}
            <header className="portal-header">
                <h1>Sri Venkatesa Perumal College of Engineering & Technology</h1>
                <p>(AUTONOMOUS - SVPCET, Affiliated to JNTUA)</p>
                <p><strong>Examinations Branch - B.Tech Grade Statements</strong></p>
            </header>

            {/* Navigation Tabs */}
            <nav className="nav-tabs">
                <button 
                    className={activeTab === 'search' ? 'active' : ''} 
                    onClick={() => setActiveTab('search')}>
                    Roll Number Search
                </button>
                <button 
                    className={activeTab === 'all' ? 'active' : ''} 
                    onClick={() => setActiveTab('all')}>
                    All Student Results
                </button>
            </nav>

            {/* Main Content Area */}
            <main className="container">
                {activeTab === 'search' && (
                    <section>
                        <h2 className="section-title">Check Your Semester Results</h2>
                        <form onSubmit={handleSearch} className="search-box">
                            <input 
                                type="text" 
                                placeholder="Enter Roll No (e.g., 25G01A4302)" 
                                value={searchRoll} 
                                onChange={(e) => setSearchRoll(e.target.value)}
                            />
                            <select value={selectedSem} onChange={(e) => setSelectedSem(e.target.value)}>
                                <option value="sem1">B.Tech 1st Year - Semester I</option>
                                <option value="sem2">B.Tech 1st Year - Semester II</option>
                            </select>
                            <button type="submit">View Result</button>
                        </form>

                        {errorMsg && <p className="error-msg">{errorMsg}</p>}

                        {foundStudent && (
                            <div>
                                <div className="info-card">
                                    <div className="info-grid">
                                        <p><strong>Roll Number:</strong> {foundStudent.rollNumber}</p>
                                        <p><strong>Student Name:</strong> {foundStudent.name}</p>
                                        <p><strong>Branch:</strong> {foundStudent.branch}</p>
                                        <p><strong>Semester:</strong> {selectedSem === 'sem1' ? 'I Semester' : 'II Semester'}</p>
                                        <p><strong>SGPA:</strong> {foundStudent.results[selectedSem]?.sgpa || 'N/A'}</p>
                                    </div>
                                </div>

                                <table className="results-table">
                                    <thead>
                                        <tr>
                                            <th>Subject Code</th>
                                            <th>Subject Title</th>
                                            <th>INT</th>
                                            <th>EXT</th>
                                            <th>Total</th>
                                            <th>Credits</th>
                                            <th>Grade</th>
                                            <th>Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {foundStudent.results[selectedSem]?.subjects.map((sub, idx) => (
                                            <tr key={idx}>
                                                <td>{sub.code}</td>
                                                <td style={{ textAlign: 'left' }}>{sub.name}</td>
                                                <td>{sub.int}</td>
                                                <td>{sub.ext}</td>
                                                <td>{sub.total}</td>
                                                <td>{sub.cr}</td>
                                                <td>{sub.grade}</td>
                                                <td className={sub.status === 'PASS' ? 'status-pass' : 'status-fail'}>
                                                    {sub.status}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </section>
                )}

                {activeTab === 'all' && (
                    <section>
                        <h2 className="section-title">B.Tech Overall Student Roster</h2>
                        <table className="results-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Roll Number</th>
                                    <th>Student Name</th>
                                    <th>Branch</th>
                                    <th>Sem 1 SGPA</th>
                                    <th>Sem 2 SGPA</th>
                                </tr>
                            </thead>
                            <tbody>
                                {COLLEGE_DATABASE.map((st, idx) => (
                                    <tr key={st.rollNumber}>
                                        <td>{idx + 1}</td>
                                        <td>{st.rollNumber}</td>
                                        <td style={{ textAlign: 'left' }}>{st.name}</td>
                                        <td>{st.branch}</td>
                                        <td>{st.results.sem1?.sgpa || 'N/A'}</td>
                                        <td>{st.results.sem2?.sgpa || 'N/A'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                )}
            </main>
        </div>
    );
}

// Render React App to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);