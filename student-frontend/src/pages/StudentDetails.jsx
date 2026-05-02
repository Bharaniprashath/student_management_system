import './StudentDetails.css'
import Student from '../components/Student'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StudentDetails = () => {

    
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try{
            setLoading(true);
            
            const token = localStorage.getItem('token');
            console.log("Token at /student call:", token);

            const res =  await fetch("http://localhost:8080/student",{
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
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
                    <h1>Student Directory</h1>
                    <p>Manage and view all registered students.</p>
                </div>
                <Link to="/addstudent" className="btn btn-primary add-student-btn">
                    <span>+</span> Add New Student
                </Link>
            </header>

            {loading ? (
                <div className="loading-state">Loading students...</div>
            ) : students.length > 0 ? (
                <div className="student-grid">
                    {students.map(student => (
                        <Student key={student.id} student={student} isEdit={false} />
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <p>No students found. Start by adding one!</p>
                </div>
            )}
        </div>
    )
}

export default StudentDetails;