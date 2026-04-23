import './StudentDetails.css'
import Student from '../components/student'
import { useState, useEffect } from 'react';

const StudentDetails = () => {

    const [students, setStudents] = useState([]);

    const fetchProducts = async () => {
        try{
            const res =  await fetch("http://localhost:8080/student");
            const data = await res.json();
            setStudents(data);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
        <a href="/addstudent"><button>Add Student</button></a>
        <div className='student-details-container'>
            <div className='student-list'>
            {students.map(student => (
                <Student key={student.id} student={student} addStudent={true} />
            ))}
            </div>
        </div>
        </>
        
    )
}



export default StudentDetails;