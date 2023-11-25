import "../styles/Student.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import student from "../img/Student.png";

const StudentPage = () => {
  const [studentProfile, setStudentProfile] = useState(null);

  useEffect(() => {
    // Fetch student profile data from the backend
    axios.get('http://localhost:3001/api/student-profile')
      .then(response => setStudentProfile(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="student-page">
      <header className="header">
        <button className="logout-btn" onClick={() => alert('You logged out!')}>Logout</button>
      </header>
      <div className="student-containers">
        <div className="student-details-container">
          <div className="Student-header">
            <h2>Student Details</h2>
            <img src={student} />
          </div>
          <div className="student-details-columns">
            <div className="left-column">
              <div className="student-details-col">
                <p><strong>Name:</strong> </p>
                {/* <p><strong>Name:</strong> {studentProfile.name}</p> */}
              </div>
              <div className="student-details-col">
                <p><strong>Class:</strong> </p>
                {/* <p><strong>Class:</strong> {studentProfile.class}</p> */}
              </div>
              <div className="student-details-col">
                <p><strong>Course:</strong> </p>
                {/* <p><strong>Course:</strong> {studentProfile.course}</p> */}
              </div>
            </div>
            <div className="right-column">
              <div className="student-details-col">
                <p><strong>Admission No:</strong> </p>
                {/* <p><strong>Admission No:</strong> {studentProfile.admission_no}</p> */}
              </div>
              <div className="student-details-col">
                <p><strong>Classroom No:</strong> </p>
                {/* <p><strong>Classroom No:</strong> {studentProfile.classroom_no}</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="examination-details-container">
          <h2 className>Examination Details</h2>
          <div className="examination-details-inner-container">
            <div className="left-column">
              <div className="student-details-col">
                <p><strong>Subject Code:</strong></p>
                {/* <p><strong>Subject Code:</strong> {studentProfile.subject_code}</p> */}
              </div>
              <div className="student-details-col">
                <p><strong>Exam Room No:</strong></p>
                {/* <p><strong>Exam Room No:</strong> {studentProfile.exam_room_no}</p> */}
              </div>
              <div className="student-details-col">
                <p><strong>Exam Date:</strong></p>
                {/* <p><strong>Exam Date:</strong> {studentProfile.exam_date}</p> */}
              </div>
            </div>
            <div className="right-column">
              <div className="student-details-col">
                <p><strong>Subject:</strong></p>
                {/* <p><strong>Subject:</strong> {studentProfile.subject}</p> */}
              </div>
              <div className="student-details-col">
                <p><strong>Seat No:</strong></p>
                {/* <p><strong>Seat No:</strong> {studentProfile.seat_no}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
