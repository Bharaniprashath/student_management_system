import './Student.css';
import deleteStudent from '../services/deleteStudent';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Student = ({ student, addStudent }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        console.log('are you sure you want to delete')
        window.alert("are you sure you want to delete a student")
        await deleteStudent(student.id);
        return navigate('/students')
    };


    return (
        <div className="student-container" >
            <h2>{student.name}</h2>
            <p>RegNo: {student.regNo}</p>
            <p>Age: {student.age}</p>
            <p>Email: {student.email}</p>
            <p>MobileNo: {student.mobileNo}</p>
        
        {!addStudent && (
            <>
            <Link to={`/editstudent/${student.id}`}><button className='edit-btn'>Edit Student</button></Link>
            <button className='delete-btn' onClick={handleDelete}>Delete Student</button>
            </>
        )}
        </div>    
    )
}

export default Student;