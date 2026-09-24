const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Database connection configuration
const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'svpcet_results',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Search Result API endpoint by Roll Number and Semester
app.get('/api/results/search', async (req, res) => {
    const { rollNumber, semester } = req.query;

    if (!rollNumber) {
        return res.status(400).json({ error: 'Roll number is required.' });
    }

    try {
        const targetSemester = semester || 1;

        // Fetch Student Details
        const [studentRows] = await dbPool.execute(
            'SELECT * FROM students WHERE roll_number = ?',
            [rollNumber.toUpperCase()]
        );

        if (studentRows.length === 0) {
            return res.status(404).json({ error: 'Student Roll Number not found.' });
        }

        // Fetch Semester Summary (SGPA)
        const [summaryRows] = await dbPool.execute(
            'SELECT sgpa FROM semester_results WHERE roll_number = ? AND semester = ?',
            [rollNumber.toUpperCase(), targetSemester]
        );

        // Fetch Subject Grade Breakdown
        const [subjectRows] = await dbPool.execute(
            'SELECT sub_code, subject_name, internal_marks, external_marks, total_marks, credits, grade, result_status FROM subject_grades WHERE roll_number = ? AND semester = ?',
            [rollNumber.toUpperCase(), targetSemester]
        );

        return res.json({
            student: studentRows[0],
            semester: targetSemester,
            sgpa: summaryRows.length > 0 ? summaryRows[0].sgpa : 'N/A',
            subjects: subjectRows
        });

    } catch (err) {
        console.error('Database query error:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fetch All Registered Students List
app.get('/api/students/all', async (req, res) => {
    try {
        const [students] = await dbPool.execute(
            'SELECT s.roll_number, s.student_name, s.branch, r.sgpa FROM students s LEFT JOIN semester_results r ON s.roll_number = r.roll_number AND r.semester = 1'
        );
        res.json(students);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database fetch error.' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`SVPCET Results API running on http://localhost:${PORT}`);
});