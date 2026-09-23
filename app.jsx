import React, { useState, useEffect } from 'react';
import { initialStudents, teachers, timetable, periodTimes } from './initialData.js';

export default function App() {
  const [activeTab, setActiveTab] = useState('attendance');
  const [selectedDay, setSelectedDay] = useState('MON');
  const [selectedPeriodIndex, setSelectedPeriodIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Attendance stored per day and period slot
  const [attendanceRecords, setAttendanceRecords] = useState(() => {
    const saved = localStorage.getItem('ai_period_attendance_data');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    
    // Default initial state for all days and 7 periods
    const initial = {};
    Object.keys(timetable).forEach(day => {
      initial[day] = {};
      for (let i = 0; i < 7; i++) {
        initial[day][i] = initialStudents.map(s => ({ ...s }));
      }
    });
    return initial;
  });

  useEffect(() => {
    localStorage.setItem('ai_period_attendance_data', JSON.stringify(attendanceRecords));
  }, [attendanceRecords]);

  // Active period subject code & details
  const currentSubjectCode = timetable[selectedDay]?.[selectedPeriodIndex] || "N/A";
  const getTeacherForCode = (code) => {
    if (code.includes("DMGT")) return teachers[0];
    if (code.includes("UHV")) return teachers[1];
    if (code.includes("AI")) return teachers[2];
    if (code.includes("ADS LAB")) return teachers[5];
    if (code.includes("ADS")) return teachers[3];
    if (code.includes("OOP LAB")) return teachers[6];
    if (code.includes("OOP")) return teachers[4];
    if (code.includes("PP")) return teachers[7];
    if (code.includes("ES")) return teachers[8];
    return { teacher: "Faculty", subName: code };
  };

  const currentTeacher = getTeacherForCode(currentSubjectCode);
  const currentStudents = attendanceRecords[selectedDay]?.[selectedPeriodIndex] || initialStudents;

  const handleAction = (rollNo, action) => {
    setAttendanceRecords(prev => {
      const updatedDay = { ...prev[selectedDay] };
      const updatedPeriod = updatedDay[selectedPeriodIndex].map(student => {
        if (student.rollNo !== rollNo) return student;
        if (action === 'plan_a') return { ...student, status: 'Absent', notifyParent: false };
        if (action === 'plan_b') return { ...student, status: 'Present', notifyParent: true };
        if (action === 'standard') return { ...student, status: 'Absent', notifyParent: true };
        return student;
      });
      updatedDay[selectedPeriodIndex] = updatedPeriod;
      return { ...prev, [selectedDay]: updatedDay };
    });
  };

  const setAllStatus = (status) => {
    setAttendanceRecords(prev => {
      const updatedDay = { ...prev[selectedDay] };
      updatedDay[selectedPeriodIndex] = updatedDay[selectedPeriodIndex].map(s => ({
        ...s,
        status: status,
        notifyParent: status === 'Present' ? true : s.notifyParent
      }));
      return { ...prev, [selectedDay]: updatedDay };
    });
  };

  const filteredStudents = currentStudents.filter(
    s => s.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
         s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="portal-container">
      <div className="header">
        <h1 className="header-title">College Attendance & Timetable Portal</h1>
        <p className="header-sub">
          Department of Artificial Intelligence (AI) — II B.Tech I SEM (A-Section) LH 203
        </p>
      </div>

      <div className="tabs-nav">
        <button className={`tab-btn ${activeTab === 'attendance' ? 'active' : ''}`} onClick={() => setActiveTab('attendance')}>
          Mark Attendance
        </button>
        <button className={`tab-btn ${activeTab === 'timetable' ? 'active' : ''}`} onClick={() => setActiveTab('timetable')}>
          Class Timetable
        </button>
        <button className={`tab-btn ${activeTab === 'teachers' ? 'active' : ''}`} onClick={() => setActiveTab('teachers')}>
          Faculty Directory
        </button>
      </div>

      {activeTab === 'attendance' && (
        <div>
          <div className="selector-card">
            <div className="control-group">
              <div>
                <label className="select-label">Select Day:</label>
                <select className="custom-select" value={selectedDay} onChange={e => setSelectedDay(e.target.value)}>
                  {Object.keys(timetable).map(day => <option key={day} value={day}>{day}</option>)}
                </select>
              </div>

              <div>
                <label className="select-label">Select Period:</label>
                <select className="custom-select" value={selectedPeriodIndex} onChange={e => setSelectedPeriodIndex(Number(e.target.value))}>
                  {periodTimes.map((time, idx) => (
                    <option key={idx} value={idx}>
                      Period {idx + 1} ({time})
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ flexGrow: 1 }}>
                <label className="select-label">Search Student:</label>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Roll No or Student Name..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ alignSelf: 'flex-end', display: 'flex', gap: '8px' }}>
                <button className="btn-secondary" onClick={() => setAllStatus('Present')}>Mark All Present</button>
                <button className="btn-secondary" onClick={() => setAllStatus('Absent')}>Mark All Absent</button>
              </div>
            </div>

            <div className="active-period-info">
              <strong>Period {selectedPeriodIndex + 1}:</strong> {currentSubjectCode} — {currentTeacher.subName || 'Subject'} | 
              <strong> Teacher:</strong> {currentTeacher.teacher} ({currentTeacher.phone})
            </div>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Student Name</th>
                <th>Dept</th>
                <th>Status</th>
                <th>Parent Alert</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.rollNo}>
                  <td><strong>{student.rollNo}</strong></td>
                  <td>{student.name}</td>
                  <td>{student.department}</td>
                  <td>
                    <span className={`badge ${student.status === 'Present' ? 'badge-present' : 'badge-absent'}`}>
                      {student.status}
                    </span>
                  </td>
                  <td>
                    {student.status === 'Absent' ? (
                      student.notifyParent ? (
                        <span className="badge badge-sent">SMS Sent</span>
                      ) : (
                        <span className="badge badge-suppressed">Plan A: Suppressed</span>
                      )
                    ) : (
                      <span style={{ color: '#94a3b8' }}>—</span>
                    )}
                  </td>
                  <td>
                    <select
                      className="action-dropdown"
                      value={student.status === 'Present' ? 'plan_b' : student.notifyParent ? 'standard' : 'plan_a'}
                      onChange={(e) => handleAction(student.rollNo, e.target.value)}
                    >
                      <option value="plan_b">Plan B: Auto Present</option>
                      <option value="plan_a">Plan A: Silent Absent</option>
                      <option value="standard">Standard Absent (SMS)</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'timetable' && (
        <div style={{ marginTop: '20px' }}>
          <table className="data-table timetable-table">
            <thead>
              <tr>
                <th>DAY</th>
                {periodTimes.map((time, idx) => (
                  <th key={idx}>Period {idx + 1}<br/>({time})</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(timetable).map(day => (
                <tr key={day}>
                  <td><strong>{day}</strong></td>
                  {timetable[day].map((code, idx) => {
                    const isSelected = selectedDay === day && selectedPeriodIndex === idx;
                    const teacherInfo = getTeacherForCode(code);
                    return (
                      <td key={idx} className={isSelected ? 'active-slot' : ''}>
                        <div className="slot-code">{code}</div>
                        <div className="slot-teacher">{teacherInfo.teacher}</div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'teachers' && (
        <div className="grid-cards">
          {teachers.map((item, idx) => (
            <div className="faculty-card" key={idx}>
              <div className="faculty-name">{item.teacher}</div>
              <div className="faculty-subject">{item.subName}</div>
              <div className="faculty-phone">📞 Code: {item.subCode} | Mobile: {item.phone}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}