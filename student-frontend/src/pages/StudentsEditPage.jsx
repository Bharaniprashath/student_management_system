import { useState, useEffect } from 'react'
import Student from '../components/Student'
import { Link } from 'react-router-dom'
import './StudentDetails.css' // Reuse the same styles

const StudentsEditPage = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try{
            setLoading(true);
            const res =  await fetch("http://localhost:8080/student");
            const data = await res.json();
            setStudents(data);
        } catch (error) {
            console.error("Error fetching students:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="student-details-page">
            <header className="page-header">
                <div className="header-info">
                    <h1>Manage Students</h1>
                    <p>Edit or remove students from the system.</p>
                </div>
                <Link to="/addstudent" className="btn btn-primary add-student-btn">
                    <span>+</span> Add New Student
                </Link>
            </header>

            {loading ? (
                <div className="loading-state">Loading students...</div>
            ) : students.length > 0 ? (
                <div className="student-grid" style={{ marginTop: '2rem' }}>
                    {students.map(student => (
                        <Student key={student.id} student={student} isEdit={true} />
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <p>No students found.</p>
                </div>
            )}
        </div>
    )
}

export default StudentsEditPage