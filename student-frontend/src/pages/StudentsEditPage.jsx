import { useState, useEffect } from 'react'
import Student from '../components/student'

const StudentsEditPage = () => {
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
        <div className='student-details-container'>
            <div className='student-list'>
            {students.map(student => (
                <Student key={student.id} student={student} addStudent={false} />
            ))}
            </div>
        </div>
        </>
        
    )
}

export default StudentsEditPage