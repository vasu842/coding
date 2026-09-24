import React, { useState, useEffect } from 'react';
import './styles.css';

export default function App() {
    const [activeTab, setActiveTab] = useState('search');
    const [rollNumber, setRollNumber] = useState('');
    const [semester, setSemester] = useState('1');
    const [resultData, setResultData] = useState(null);
    const [studentList, setStudentList] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Fetch single student results
    const handleSearch = async (e) => {
        e.preventDefault();
        setError('');
        setResultData(null);

        if (!rollNumber.trim()) {
            setError('Please enter a valid Roll Number.');
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(`http://localhost:5000/api/results/search?rollNumber=${rollNumber}&semester=${semester}`);
            const data = await response.json();

            if (!response.ok) {
                setError(data.error || 'Failed to retrieve results.');
            } else {
                setResultData(data);
            }
        } catch (err) {
            setError('Unable to connect to the results server.');
        } finally {
            setLoading(false);
        }
    };

    // Fetch all students list
    const fetchAllStudents = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/students/all');
            const data = await response.json();
            setStudentList(data);
        } catch (err) {
            console.error('Failed to load student directory.');
        }
    };

    useEffect(() => {
        if (activeTab === 'directory') {
            fetchAllStudents();
        }
    }, [activeTab]);

    return (
        <div>
            {/* Header Portal Branding */}
            <header className="portal-header">
                <h1>Sri Venkatesa Perumal College of Engineering & Technology</h1>
                <p>(AUTONOMOUS, Affiliated to JNTUA, Ananthapuramu)</p>
                <p><strong>Examinations Portal - Student Grade Statements</strong></p>
            </header>

            {/* Tab Navigation */}
            <nav className="nav-tabs">
                <button 
                    className={activeTab === 'search' ? 'active' : ''} 
                    onClick={() => setActiveTab('search')}>
                    Roll Number Search
                </button>
                <button 
                    className={activeTab === 'directory' ? 'active' : ''} 
                    onClick={() => setActiveTab('directory')}>
                    All Student Results
                </button>
            </nav>

            {/* Main Content Area */}
            <main className="container">
                {activeTab === 'search' && (
                    <section>
                        <form onSubmit={handleSearch} className="search-box">
                            <input 
                                type="text" 
                                placeholder="Enter Roll No (e.g. 25G01A4302)" 
                                value={rollNumber} 
                                onChange={(e) => setRollNumber(e.target.value)}
                            />
                            <select value={semester} onChange={(e) => setSemester(e.target.value)}>
                                <option value="1">B.Tech 1st Year I Sem</option>
                                <option value="2">B.Tech 1st Year II Sem</option>
                            </select>
                            <button type="submit">Get Marks</button>
                        </form>

                        {loading && <p style={{ textAlign: 'center' }}>Searching database...</p>}
                        {error && <p className="error-msg">{error}</p>}

                        {resultData && (
                            <div>
                                <div className="info-card">
                                    <div className="info-grid">
                                        <p><strong>Roll Number:</strong> {resultData.student.roll_number}</p>
                                        <p><strong>Student Name:</strong> {resultData.student.student_name}</p>
                                        <p><strong>Branch:</strong> {resultData.student.branch}</p>
                                        <p><strong>SGPA:</strong> {resultData.sgpa}</p>
                                    </div>
                                </div>

                                <table className="results-table">
                                    <thead>
                                        <tr>
                                            <th>Sub Code</th>
                                            <th>Subject Title</th>
                                            <th>INT</th>
                                            <th>EXT</th>
                                            <th>Total</th>
                                            <th>CR</th>
                                            <th>Grade</th>
                                            <th>Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {resultData.subjects.length > 0 ? (
                                            resultData.subjects.map((sub, idx) => (
                                                <tr key={idx}>
                                                    <td>{sub.sub_code}</td>
                                                    <td style={{ textAlign: 'left' }}>{sub.subject_name}</td>
                                                    <td>{sub.internal_marks}</td>
                                                    <td>{sub.external_marks}</td>
                                                    <td>{sub.total_marks}</td>
                                                    <td>{sub.credits}</td>
                                                    <td>{sub.grade}</td>
                                                    <td className={sub.result_status === 'PASS' ? 'status-pass' : 'status-fail'}>
                                                        {sub.result_status}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="8">No detailed grades published for this semester yet.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </section>
                )}

                {activeTab === 'directory' && (
                    <section>
                        <h2>B.Tech I-Sem Student Roster</h2>
                        <table className="results-table" style={{ marginTop: '15px' }}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Roll Number</th>
                                    <th>Student Name</th>
                                    <th>Branch</th>
                                    <th>SGPA (I-Sem)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentList.map((st, idx) => (
                                    <tr key={st.roll_number}>
                                        <td>{idx + 1}</td>
                                        <td>{st.roll_number}</td>
                                        <td style={{ textAlign: 'left' }}>{st.student_name}</td>
                                        <td>{st.branch}</td>
                                        <td>{st.sgpa || 'N/A'}</td>
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