import './Student.css';
import deleteStudent from '../services/deleteStudent';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Student = ({ student, isEdit }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            try {
                await deleteStudent(student.id);
                toast.success("Student deleted successfully!");
                navigate('/students');
            } catch (error) {
                console.error("Error deleting student:", error);
                toast.error("Failed to delete student");
            }
        }
    };

    return (
        <div className="student-card">
            <div className="student-card-header">
                <div className="student-avatar">
                    {student.name.charAt(0).toUpperCase()}
                </div>
                <div className="student-info-main">
                    <h3>{student.name}</h3>
                    <p className="reg-no">#{student.regNo}</p>
                </div>
            </div>
            
            <div className="student-card-body">
                <div className="info-item">
                    <span className="label">Email</span>
                    <span className="value">{student.email}</span>
                </div>
                <div className="info-item">
                    <span className="label">Mobile</span>
                    <span className="value">{student.mobileNo}</span>
                </div>
                <div className="info-item">
                    <span className="label">Age</span>
                    <span className="value">{student.age} years</span>
                </div>
            </div>
            
            {isEdit && (
                <div className="student-card-actions">
                    <Link to={`/editstudent/${student.id}`} className="btn-edit">
                        Edit
                    </Link>
                    <button className="btn-delete" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            )}
        </div>    
    )
}

export default Student;