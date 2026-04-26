import "./AddStudent.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'

const AddStudent = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [regNo, setRegNo] = useState("");
    const [age, setAge] = useState("");
    const [mobileNo, setMobileNo] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const studentData = {
            name,
            email,
            regNo,
            age,
            mobileNo
        };
        try{
            await fetch("http://localhost:8080/student",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(studentData)
            })
            toast.success("Student added successfully!");
            return navigate('/students')
        }catch(error){
            console.error("Error adding student:", error);
            toast.error("Failed to add student");
        }
    }

    return (
        <div className="form-container">
            <header className="form-header">
                <h2>Add New Student</h2>
            </header>
            
            <form className="student-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        required
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="regNo">Registration Number</label>
                        <input
                            id="regNo"
                            type="number"
                            value={regNo}
                            onChange={(e) => setRegNo(e.target.value)}
                            placeholder="12345"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input
                            id="age"
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="20"
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="mobileNo">Mobile Number</label>
                    <input
                        id="mobileNo"
                        type="number"
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                        placeholder="9876543210"
                        required
                    />
                </div>
                
                <div className="form-actions">
                    <button type="button" className="btn-cancel" onClick={() => navigate('/students')}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Save Student</button>
                </div>
            </form>
        </div>
    )
}

export default AddStudent
